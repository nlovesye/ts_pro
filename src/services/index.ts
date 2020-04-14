import { POST, GET } from './request';
import * as general from './api/general';

export const _login = async (data: any) => await POST('/api/login', { data });

export { general as _general };
