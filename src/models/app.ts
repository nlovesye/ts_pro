import { Effect, Reducer, Subscription } from 'umi';
import { localRead, localSet, localRemove } from '@/utils';
import { _login } from '@/services';
import { hex_md5 } from '@/utils/md5';

export interface AppModelState {
  isLogin: boolean;
  accessToken: string | null;
  userName: string;
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
  };
  // subscriptions: {};
}

const initState = (): AppModelState => {
  const BasicAuth = 'Basic YXBwOjEyMzQ1Ng==';
  const isLogin = Boolean(localRead('isLogin'));
  const accessToken = isLogin ? localRead('accessToken') : BasicAuth;
  const userName = localRead('userName') || '';
  return {
    isLogin,
    accessToken,
    userName,
  };
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
      try {
        const ret: LoginRes = yield _login(reqData);
        yield put({
          type: 'setLoginInfo',
          payload: { accessToken: ret.access_token, userName: ret.username },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  reducers: {
    setLoginInfo(state: AppModelState, action) {
      const { accessToken, userName } = action.payload;
      localSet('isLogin', true);
      localSet('accessToken', accessToken);
      localSet('userName', userName);
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
      return {
        ...state,
        isLogin: false,
        accessToken: null,
        userName: '',
      };
    },
  },

  // subscriptions: {}
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
