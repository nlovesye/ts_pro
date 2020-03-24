import { POST, GET } from './request';

export const _login = async (data: any) => await POST('/api/login', { data });
