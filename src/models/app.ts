import { Effect, Reducer, Subscription, history } from 'umi';
import { localRead, localSet, localRemove } from '@/utils';
import { _login } from '@/services';
import { hex_md5 } from '@/utils/md5';
import { IPermission, ITab } from '@/types';

export interface AppModelState {
    isLogin: boolean;
    token: string | null;
    userName: string;
    nickName: string;
    exp: number;
    permissions: IPermission[];
    activeCode: string;
    openTabs: ITab[];
    siderCollapsed: boolean;
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
    const BasicAuth = '';
    const isLogin = Boolean(localRead('isLogin'));
    const token = isLogin ? localRead('token') : BasicAuth;
    const userName = localRead('userName') || '';
    const nickName = localRead('nickName') || '';
    const exp = parseInt(localRead('exp') || '0');
    const permissions = JSON.parse(localRead('permissions') || '[]');
    // const curRoute = getRouteByPath(history.location.pathname)
    if (history && history.location && history.location.pathname !== '/') {
        history.replace('/');
    }
    const curRoute = { code: 'HOME', name: '首页' };
    // console.log('history', history, routes, curRoute)
    const state: AppModelState = {
        isLogin,
        token,
        userName,
        nickName,
        exp,
        permissions,
        activeCode: curRoute.code || '',
        openTabs: !!curRoute.code
            ? [{ code: curRoute.code, name: curRoute.name || '' }]
            : [],
        siderCollapsed: false,
    };
    return state;
};

export default <AppModelType>{
    namespace: 'app',
    state: initState(),

    effects: {
        *login({ payload }, { call, put }) {
            const { userName, password } = payload;
            interface LoginRes {
                token: string;
                nickName: string;
                exp: number;
            }
            const reqData = new FormData();
            reqData.append('userName', userName);
            reqData.append('password', hex_md5(password));
            try {
                const ret: LoginRes = yield _login(reqData);
                // console.log('ret', ret);
                yield put({
                    type: 'setLoginInfo',
                    payload: {
                        token: ret.token,
                        userName,
                        nickName: ret.nickName,
                        exp: ret.exp || 0,
                    },
                });
            } catch (error) {
                console.log('loginError', error);
            }
        },
    },

    reducers: {
        setLoginInfo(state: AppModelState, action) {
            const { token, userName, nickName, exp } = action.payload;
            localSet('isLogin', true);
            localSet('token', token);
            localSet('userName', userName);
            localSet('nickName', nickName);
            localSet('exp', exp);
            // localSet('permissions', JSON.stringify(permissions || []));
            return {
                ...state,
                isLogin: true,
                ...action.payload,
            };
        },
        logout(state: AppModelState) {
            localRemove('isLogin');
            localRemove('token');
            localRemove('userName');
            localRemove('nickName');
            localRead('exp');
            // localRemove('permissions');
            return {
                ...state,
                isLogin: false,
                token: null,
                userName: '',
                nickName: '',
                exp: 0,
                // permissions: [],
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
        updateState(state: AppModelState, action: any) {
            return {
                ...state,
                ...action.payload,
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
