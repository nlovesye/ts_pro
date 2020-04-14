import { POST, GET, PUT, DELETE } from '../request';

export interface General {
    _id: string;
    name: string; // 姓名
    camp: number; // 阵营
    level: number; // 等级
    advanced: number; // 进阶等级
    quality: number; // 星级
    cavalry: number; // 骑兵
    mauler: number; // 盾兵
    bowman: number; // 弓兵
    spearman: number; // 枪兵
    apparatus: number; // 器械
    tags: string[]; // 标签
    isAwaken: boolean; // 是否觉醒
    fate: string[]; // 缘分武将
    fateCount: number; // 缘分组数量
    isPureGeneral: boolean; // 是否武将（非内政）
    controlVal: number; // 统御值
}

export interface IQuery {
    pageNo: number;
    pageSize: number;
    camp?: number;
    quality?: number;
    cavalry?: number;
    mauler?: number;
    bowman?: number;
    spearman?: number;
    apparatus?: number;
}

// 添加武将
export const _addGeneral = async (data: General) =>
    await POST('/api/general', { data });

// 更新武将
export const _updateGeneral = async (data: General) =>
    await PUT('/api/general', { data });

// 删除武将
export const _deleteGeneral = async (_id: string) =>
    await DELETE('/api/general', { data: _id });

// 获取武将列表
export const _getGeneral = async (data: IQuery) =>
    await GET('/api/general', { params: data });
