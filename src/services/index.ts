import { POST } from './request';

export const _login = async (data: any) =>
  await POST('/api/web/token', { data });
