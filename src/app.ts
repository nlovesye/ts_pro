import { localRead } from '@/utils';

export interface IInitState {
  isLogin: boolean;
}

export async function getInitialState() {
  const isLogin = true;
  // let isLogin = Boolean(localRead('isLogin'))
  const initState: IInitState = {
    isLogin,
  };
  return initState;
}
