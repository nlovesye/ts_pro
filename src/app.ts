import { localRead } from '@/utils';
import { RequestConfig, getDvaApp } from 'umi';

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

// interface RequestError extends Error {
//   data?: any; // 这里是后端返回的原始数据
//   info?: ErrorInfoStructure;
// }

export async function getInitialState() {
    const initState: IInitState = {};
    // console.log('getInitialState', initState)
    return initState;
}

export const request: RequestConfig = {
    timeout: 1000 * 60 * 1,
    errorConfig: {
        adaptor: err => {
            // const app = getDvaApp
            const { dispatch } = getDvaApp()._store;
            // console.log('adaptor', err)
            if ('code' in err) {
                switch (err.code) {
                    case 401:
                        dispatch({
                            type: 'app/logout',
                        });
                        break;
                    default:
                        break;
                }
            }
            const error: ErrorInfoStructure = {
                ...err,
                errorMessage: err.message || 'api请求失败！',
            };
            return error;
        },
    },
    middlewares: [
        async function setHeader(ctx, next) {
            const BasicAuth = '';
            const isLogin = Boolean(localRead('isLogin'));
            const token = isLogin ? localRead('token') : BasicAuth;
            if (!token) {
                await next();
            } else {
                const mixinHeaders = {
                    Authorization: token,
                };
                ctx.req.options.headers = {
                    ...ctx.req.options.headers,
                    ...mixinHeaders,
                };
                // console.log('setHeader', ctx, next)
                await next();
            }
        },
    ],
    // responseInterceptors: [
    //     function (res) {
    //         console.log('res', res)
    //         return res
    //     }
    // ]
};
