export type IPermission = {
  id: number;
  name: string;
  code: string;
  type: string;
  url: string | null;
  method: string | null;
  children: IPermission[];
  depth: number | null;
  parent: number | null;
  path: any[];
};

export interface ITab {
  code: string;
  name: string;
}

export type IRoute = {
  path: string;
  code?: string;
  routes?: IRoute[];
  access?: string;
  name?: string;
  component?: any;
  wrappers?: string[];
  redirect?: string;
};
