import React, { useState } from 'react';
import { Table, Select, message, Button } from 'antd';
import {
    _getGeneral,
    _addGeneral,
    General,
    _updateGeneral,
    _deleteGeneral,
    IQuery,
} from '@/services/general';
import Edit from './Edit';
import style from './style.less';

const { Option } = Select;

export const adaptive = {
    1: 'C',
    2: 'B',
    3: 'A',
    4: 'S',
};

enum Camp {
    '魏' = 1,
    '蜀' = 2,
    '吴' = 3,
    '群' = 4,
}

enum CampColor {
    '#1E90FF' = 1,
    '#00FF7F' = 2,
    '#FF6347' = 3,
    '#FFDEAD' = 4,
}

export enum Adaptive {
    'C' = 1,
    'B' = 2,
    'A' = 3,
    'S' = 4,
}

export const emptyData: General = {
    _id: 'add',
    camp: 1,
    name: '',
    quality: 3,
    controlVal: 3,
    level: 1,
    cavalry: 1,
    mauler: 1,
    bowman: 1,
    spearman: 1,
    apparatus: 1,
    advanced: 0,
    tags: [],
    fate: [],
    fateCount: 0,
    isAwaken: false,
    isPureGeneral: true,
};

export default function() {
    const [visible, setVisible] = useState(false);
    const [initData, setInitData] = useState({ ...emptyData });
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [query, setQuery] = useState({});

    const getFlag = (flag: boolean) => (flag ? '是' : '否');

    const getData = async () => {
        try {
            setLoading(true);
            for (const k in query) {
                if (query.hasOwnProperty(k)) {
                    if (query[k] === 0) {
                        delete query[k];
                    }
                }
            }
            const ret = await _getGeneral({
                pageNo: current,
                pageSize,
                ...query,
            });
            setData(dealData(ret.list || []));
            setTotal(ret.total || 0);
        } catch (error) {
            setData([]);
            setTotal(0);
        } finally {
            setLoading(false);
        }
    };

    const onEdit = (r: General) => {
        setInitData(r);
        setVisible(true);
    };
    const onDelete = async (_id: string) => {
        try {
            await _deleteGeneral(_id);
            getData();
            message.success('操作成功');
        } catch (error) {
            message.error(error.msg || '删除失败');
        }
    };

    // console.log('home')
    const columns = [
        {
            title: '序号',
            dataIndex: '_index',
            align: 'center',
            render: (val: any, r: any, i: number) => ++i,
        },
        {
            title: '姓名',
            dataIndex: 'name',
            align: 'center',
        },
        {
            title: '阵营',
            dataIndex: 'camp',
            align: 'center',
            sorter: (a: General, b: General) => a.camp - b.camp,
            render: (val: number) => {
                return (
                    <span style={{ color: CampColor[val] }}>{Camp[val]}</span>
                );
            },
        },
        {
            title: '星级',
            dataIndex: 'quality',
            align: 'center',
            sorter: (a: General, b: General) => a.quality - b.quality,
            render: (val: string) => {
                return (
                    <span style={val === 5 ? { color: '#FF4500' } : {}}>
                        {val}
                    </span>
                );
            },
        },
        {
            title: '统御值',
            dataIndex: 'controlVal',
            align: 'center',
        },
        {
            title: '骑兵',
            dataIndex: 'cavalry',
            align: 'center',
            sorter: (a: General, b: General) =>
                Adaptive[a.cavalry] - Adaptive[b.cavalry],
            render: (val: string) => {
                return (
                    <span style={val === 'S' ? { color: '#FF4500' } : {}}>
                        {val}
                    </span>
                );
            },
        },
        {
            title: '盾兵',
            dataIndex: 'mauler',
            align: 'center',
            sorter: (a: General, b: General) =>
                Adaptive[a.mauler] - Adaptive[b.mauler],
            render: (val: string) => {
                return (
                    <span style={val === 'S' ? { color: '#FF4500' } : {}}>
                        {val}
                    </span>
                );
            },
        },
        {
            title: '弓兵',
            dataIndex: 'bowman',
            align: 'center',
            sorter: (a: General, b: General) =>
                Adaptive[a.bowman] - Adaptive[b.bowman],
            render: (val: string) => {
                return (
                    <span style={val === 'S' ? { color: '#FF4500' } : {}}>
                        {val}
                    </span>
                );
            },
        },
        {
            title: '枪兵',
            dataIndex: 'spearman',
            align: 'center',
            sorter: (a: General, b: General) =>
                Adaptive[a.spearman] - Adaptive[b.spearman],
            render: (val: string) => {
                return (
                    <span style={val === 'S' ? { color: '#FF4500' } : {}}>
                        {val}
                    </span>
                );
            },
        },
        {
            title: '器械',
            dataIndex: 'apparatus',
            align: 'center',
            sorter: (a: General, b: General) =>
                Adaptive[a.apparatus] - Adaptive[b.apparatus],
            render: (val: string) => {
                return (
                    <span style={val === 'S' ? { color: '#FF4500' } : {}}>
                        {val}
                    </span>
                );
            },
        },
        {
            title: '进阶等级',
            dataIndex: 'advanced',
            align: 'center',
        },
        {
            title: '等级',
            dataIndex: 'level',
            align: 'center',
        },
        {
            title: '标签',
            dataIndex: 'tags',
            align: 'center',
            render: (vals: string[]) => {
                return vals.join('，');
            },
        },
        {
            title: '是否觉醒',
            dataIndex: 'isAwaken',
            align: 'center',
            render: (val: boolean) => getFlag(val),
        },
        {
            title: '内政',
            dataIndex: 'isPureGeneral',
            align: 'center',
            render: (val: boolean) => getFlag(!val),
        },
        {
            title: '缘分武将',
            dataIndex: 'fate',
            align: 'center',
        },
        {
            title: '缘分组数量',
            dataIndex: 'fateCount',
            align: 'center',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            align: 'center',
            render: (text: undefined, record: General) => (
                <React.Fragment>
                    <span
                        className="global_click_text"
                        onClick={() => onEdit(record)}
                    >
                        修改
                    </span>
                    <span
                        className="global_click_text"
                        style={{ marginLeft: 10 }}
                        onClick={() => onDelete(record._id)}
                    >
                        删除
                    </span>
                </React.Fragment>
            ),
        },
    ];

    const pagination = {
        total,
        current,
        pageSize,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['10', '20', '50', '200', '500'],
        showTotal: (total: number) => `共${total}条`,
        onChange: (page: number) => setCurrent(page),
        onShowSizeChange: (current: number, size: number) => setPageSize(size),
    };

    const dealData = arr => {
        return arr.map(item => {
            return {
                ...item,
                cavalry: adaptive[item.cavalry],
                mauler: adaptive[item.mauler],
                bowman: adaptive[item.bowman],
                spearman: adaptive[item.spearman],
                apparatus: adaptive[item.apparatus],
            };
        });
    };

    React.useEffect(() => {
        getData();
        // return () => {
        //     cleanup
        // }
    }, [current, pageSize, query]);

    const getHeight = () => {
        // console.log('w', window.innerHeight)
        return window.innerHeight - 220;
    };

    const querySelectStyle = { width: 90, marginRight: 10 };

    return (
        <div className={style.p_sanguo}>
            <Edit
                getData={getData}
                initData={initData}
                visible={visible}
                setVisible={setVisible}
                setInitData={setInitData}
            />
            <div className={style.titlebar}>
                <Button
                    type="primary"
                    size="small"
                    onClick={() => setVisible(true)}
                >
                    武将录入
                </Button>
                <div className={style.query_con}>
                    <Select
                        placeholder="星级"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, quality: val }
                                    : { ...query, quality: 0 },
                            )
                        }
                    >
                        <Option value={5}>五星</Option>
                        <Option value={4}>四星</Option>
                        <Option value={3}>三星</Option>
                        <Option value={2}>二星</Option>
                    </Select>
                    <Select
                        placeholder="阵营"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, camp: val }
                                    : { ...query, camp: 0 },
                            )
                        }
                    >
                        <Option value={1}>魏</Option>
                        <Option value={2}>蜀</Option>
                        <Option value={3}>吴</Option>
                        <Option value={4}>群</Option>
                    </Select>
                    <Select
                        placeholder="骑兵"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, cavalry: val }
                                    : { ...query, cavalry: 0 },
                            )
                        }
                    >
                        <Option value={4}>S</Option>
                        <Option value={3}>A</Option>
                        <Option value={2}>B</Option>
                        <Option value={1}>C</Option>
                    </Select>
                    <Select
                        placeholder="盾兵"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, mauler: val }
                                    : { ...query, mauler: 0 },
                            )
                        }
                    >
                        <Option value={4}>S</Option>
                        <Option value={3}>A</Option>
                        <Option value={2}>B</Option>
                        <Option value={1}>C</Option>
                    </Select>
                    <Select
                        placeholder="弓兵"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, bowman: val }
                                    : { ...query, bowman: 0 },
                            )
                        }
                    >
                        <Option value={4}>S</Option>
                        <Option value={3}>A</Option>
                        <Option value={2}>B</Option>
                        <Option value={1}>C</Option>
                    </Select>
                    <Select
                        placeholder="枪兵"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, spearman: val }
                                    : { ...query, spearman: 0 },
                            )
                        }
                    >
                        <Option value={4}>S</Option>
                        <Option value={3}>A</Option>
                        <Option value={2}>B</Option>
                        <Option value={1}>C</Option>
                    </Select>
                    <Select
                        placeholder="器械"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, apparatus: val }
                                    : { ...query, apparatus: 0 },
                            )
                        }
                    >
                        <Option value={4}>S</Option>
                        <Option value={3}>A</Option>
                        <Option value={2}>B</Option>
                        <Option value={1}>C</Option>
                    </Select>
                    <Select
                        placeholder="非内政"
                        style={querySelectStyle}
                        allowClear={true}
                        onChange={(val: number) =>
                            setQuery(
                                !!val
                                    ? { ...query, isPureGeneral: Number(val) }
                                    : { ...query, isPureGeneral: 0 },
                            )
                        }
                    >
                        <Option value={1}>是</Option>
                        <Option value={0}>否</Option>
                    </Select>
                </div>
            </div>
            <Table
                columns={columns}
                rowKey="_id"
                dataSource={data}
                size="small"
                pagination={pagination}
                loading={loading}
                bordered={true}
                scroll={{ y: getHeight() }}
            />
        </div>
    );
}
