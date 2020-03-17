import { localRead } from '@/utils';
import { RequestConfig, useStore } from 'umi';

export interface IInitState {}

interface ErrorInfoStructure {
  success: boolean; // if request is success
  data?: any; // response data
  errorCode?: string; // code for errorType
  errorMessage?: string; // message display to user
  showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
  host?: string; // onvenient for backend Troubleshooting: host of current access server
}

export async function getInitialState() {
  const initState: IInitState = {};
  // console.log('getInitialState', initState)
  return initState;
}

export const request: RequestConfig = {
  timeout: 1000 * 60 * 1,
  errorConfig: {
    adaptor: res => {
      // console.log('adaptor', res)
      const err: ErrorInfoStructure = {
        ...res,
        errorMessage: res.msg || '失败！',
      };
      return err;
    },
  },
  middlewares: [
    async function setHeader(ctx, next) {
      const BasicAuth = 'Basic YXBwOjEyMzQ1Ng==';
      const isLogin = Boolean(localRead('isLogin'));
      const accessToken = isLogin ? localRead('accessToken') : BasicAuth;
      const token = accessToken;
      if (!token) {
        console.error('token不存在！');
      } else {
        const mixinHeaders = {
          Authorization: token,
        };
        ctx.req.options.headers = {
          ...ctx.req.options.headers,
          ...mixinHeaders,
        };
        // ctx.req.options.withCredentials = true
        // console.log('setHeader', ctx, next)
        await next();
      }
    },
  ],
};
