import { Effect, Reducer, Subscription } from 'umi';
import { localRead, localSet, localRemove } from '@/utils';

export interface AppModelState {
  isLogin: boolean;
  accessToken: string | null;
  userName: string;
}

export interface AppModelType {
  namespace: 'app';
  state: AppModelState;
  // effects: {};
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
