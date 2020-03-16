import { Effect, Reducer, Subscription, useModel } from 'umi';

export interface AppModelState {
  isLogin: boolean;
}

export interface AppModelType {
  namespace: 'app';
  state: AppModelState;
  // effects: {};
  reducers: {};
  // subscriptions: {};
}

const initState = (): AppModelState => {
  return {
    isLogin: false,
  };
};

export default <AppModelType>{
  namespace: 'app',
  state: initState(),
  reducers: {
    // delete(state: IAppState, { payload: id }) {
    //     // return state.filter(item => item.id !== id);
    // },
  },
};

// export default function () {
//     return {
//         namespace: 'app',
//         state: {},
//         reducers: {
//             shit: () => {
//                 console.log('shit')
//             }
//         }
//     }
// }
