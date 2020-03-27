import { Effect, Reducer, Subscription, history } from 'umi';
import { localRead, localSet, localRemove } from '@/utils';
import { _login } from '@/services';
import { hex_md5 } from '@/utils/md5';
import { IPermission, ITab } from '@/types';

export interface AppModelState {
    isLogin: boolean;
    accessToken: string | null;
    userName: string;
    permissions: IPermission[];
    activeCode: string;
    openTabs: ITab[];
}

export interface AppModelType {
    namespace: 'app';
    state: AppModelState;
    effects: {
        login: Effect;
    };
    reducers: {
        setLoginInfo: Reducer<AppModelState>;
        logout: Reducer<AppModelState>;
        selectTab: Reducer<AppModelState>;
        closeTab: Reducer<AppModelState>;
    };
    subscriptions: {
        // test: Subscription
    };
}

const initState = () => {
    const BasicAuth = 'Basic YXBwOjEyMzQ1Ng==';
    const isLogin = Boolean(localRead('isLogin'));
    const accessToken = isLogin ? localRead('accessToken') : BasicAuth;
    const userName = localRead('userName') || '';
    const permissions = JSON.parse(localRead('permissions') || '[]');
    // const curRoute = getRouteByPath(history.location.pathname)
    if (history.location.pathname !== '/') {
        history.replace('/');
    }
    const curRoute = { code: 'HOME', name: '首页' };
    // console.log('history', history, routes, curRoute)
    const state: AppModelState = {
        isLogin,
        accessToken,
        userName,
        permissions,
        activeCode: curRoute.code || '',
        openTabs: !!curRoute.code
            ? [{ code: curRoute.code, name: curRoute.name || '' }]
            : [],
    };
    return state;
};

export default <AppModelType>{
    namespace: 'app',
    state: initState(),

    effects: {
        *login({ payload }, { call, put }) {
            const { userName, password, remember } = payload;
            interface LoginRes {
                access_token: string;
                refresh_token: string;
                token_type: string;
                expires_in: number;
                scope: string;
                companyId: number | null;
                id: number;
                isAllClientProject: boolean;
                organizationName: string;
                username: string;
                permissions: any[];
            }
            const reqData = new FormData();
            reqData.append('grant_type', 'password');
            reqData.append('username', userName);
            reqData.append('password', hex_md5(password));
            reqData.append('remember', remember);
            // console.log('req', reqData);
            try {
                const ret: LoginRes = yield _login(reqData);
                console.log('ret', ret);
                yield put({
                    type: 'setLoginInfo',
                    payload: {
                        accessToken: ret.access_token,
                        userName: ret.username,
                        permissions: ret.permissions,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        },
    },

    reducers: {
        setLoginInfo(state: AppModelState, action) {
            const { accessToken, userName, permissions } = action.payload;
            localSet('isLogin', true);
            localSet('accessToken', accessToken);
            localSet('userName', userName);
            localSet('permissions', JSON.stringify(permissions || []));
            return {
                ...state,
                isLogin: true,
                ...action.payload,
            };
        },
        logout(state: AppModelState) {
            localRemove('isLogin');
            localRemove('accessToken');
            localRemove('userName');
            localRemove('permissions');
            return {
                ...state,
                isLogin: false,
                accessToken: null,
                userName: '',
                permissions: [],
            };
        },
        selectTab(state: AppModelState, action) {
            const { code, name } = action.payload;
            const { openTabs } = state;
            if (state.activeCode === code) {
                return;
            }
            let newActiveCode = code;
            let newOpenTabs: ITab[] = [...openTabs];
            if (!openTabs.some(t => t.code === code)) {
                newOpenTabs.push({ code, name });
            }
            history.push(code);
            // console.log('history', history)
            return {
                ...state,
                activeCode: newActiveCode,
                openTabs: newOpenTabs,
            };
        },
        closeTab(state: AppModelState, action) {
            const { code } = action.payload;
            const { openTabs } = state;
            const targetIndex = openTabs.findIndex(t => t.code === code);
            if (targetIndex < 0) {
                return;
            }
            let newOpenTabs: ITab[] = openTabs.filter(
                (tab, i) => i !== targetIndex,
            );
            const newIndex =
                targetIndex - 1 > -1
                    ? targetIndex - 1
                    : targetIndex < newOpenTabs.length
                    ? targetIndex
                    : -1;
            let newActiveCode = !!newOpenTabs[newIndex]
                ? newOpenTabs[newIndex].code
                : '';
            history.push(newActiveCode || '/');
            return {
                ...state,
                activeCode: newActiveCode,
                openTabs: newOpenTabs,
            };
        },
    },

    subscriptions: {
        // test({ dispatch, history }) {
        //   return history.listen(({ pathname }) => {
        //     console.log('subs', history)
        //     // if (pathname === '/') {
        //     //   dispatch({
        //     //     type: 'query',
        //     //   })
        //     // }
        //   });
        // }
    },
};

// export default function () {
//     return {
//         namespace: 'app',
//         state: initState(),
//         reducers: {
//             setLoginInfo(state: AppModelState, { payload }: { payload: LoginInfo }) {
//                 return {
//                     ...state,
//                     ...payload
//                 }
//             },
//         }
//     }
// }
