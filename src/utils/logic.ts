import { IPermission, IRoute } from '@/types';
import { deepCopy, localRead } from './index';
import { routes } from '../../config/router';

let permissions: IPermission[] = [];
permissions = JSON.parse(localRead('permissions') || '[]');

export const getPermissionByCode = (
  permissions: IPermission[],
  code: string,
): IPermission => {
  let rt = {};
  const findByCode = (list: IPermission[]) => {
    for (const item of list) {
      if (item.code === code) {
        rt = deepCopy(item);
        break;
      }
      if (item.children && item.children.length) {
        findByCode(item.children);
      }
    }
  };
  findByCode(permissions);
  return rt as IPermission;
};

export const getRouteByPath = (path: string): IRoute => {
  let rt = {};
  const findByCode = (list: IRoute[]) => {
    for (const item of list) {
      if (item.path === path) {
        rt = deepCopy(item);
        break;
      }
      if (item.routes && item.routes.length) {
        findByCode(item.routes);
      }
    }
  };
  findByCode(routes);
  return rt as IRoute;
};

export const authByCode = (code: string): boolean => {
  let flag: boolean = false;
  const findByCode = (list: IPermission[]) => {
    for (const item of list) {
      if (item.code === code) {
        flag = true;
        break;
      }
      if (item.children && item.children.length) {
        findByCode(item.children);
      }
    }
  };
  findByCode(permissions);
  return flag;
};
