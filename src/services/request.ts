import { request, RequestConfig } from 'umi';

interface IReqConfig extends RequestConfig {
    // shit: boolean
}

export const GET = async function(url: string, d: IReqConfig) {
    return await request(url, {
        method: 'get',
        ...d,
    });
};

export const POST = async function(url: string, d: IReqConfig) {
    return await request(url, {
        method: 'post',
        ...d,
    });
};

export const PUT = async function(url: string, d: IReqConfig) {
    return await request(url, {
        method: 'put',
        ...d,
    });
};

export const DELETE = async function(url: string, d: IReqConfig) {
    return await request(url, {
        method: 'delete',
        ...d,
    });
};
