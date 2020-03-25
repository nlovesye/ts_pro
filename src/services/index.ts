import { POST, GET } from './request';

export const _login = async (data: any) => await POST('/api/login', { data });

// 添加武将
export const _addGeneral = async (data: any) =>
    await POST('/api/general', { data });

export const _getGeneral = async (data: any) =>
    await GET('/api/general', { data });
