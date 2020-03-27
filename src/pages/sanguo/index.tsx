import React, { useState } from 'react';
import {
    Table,
    Button,
    Modal,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    Checkbox,
    Slider,
    Rate,
    message,
} from 'antd';
import {
    _getGeneral,
    _addGeneral,
    General,
    _updateGeneral,
    _deleteGeneral,
} from '@/services/general';
import style from './style.less';

// const { _getGeneral, _addGeneral, IGeneral } = _general
const { Item } = Form;
const { Option } = Select;

const adaptive = {
    1: 'C',
    2: 'B',
    3: 'A',
    4: 'S',
};

const controlMarks = {
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
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

enum Adaptive {
    'C' = 1,
    'B' = 2,
    'A' = 3,
    'S' = 4,
}

const emptyData: General = {
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

function Edit({
    getData,
    initData,
    visible,
    setVisible,
    setInitData,
}: {
    getData: () => void;
    setVisible: (flag: boolean) => void;
    initData: General;
    visible: boolean;
    setInitData: (d: General) => void;
}) {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            setLoading(true);
            const d = await form.validateFields();
            if (d._id) {
                delete d._id;
            }
            if (initData._id === 'add') {
                await _addGeneral(d as General);
            } else {
                await _updateGeneral(d as General);
            }
            handleCancel();
            getData();
        } catch (error) {
            console.log(error);
            message.error(error.msg || '删除失败');
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setInitData({ ...emptyData });
        setVisible(false);
    };

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 18 },
    };

    React.useEffect(() => {
        if (visible) {
            if (initData._id !== 'add') {
                console.log('initData', initData);
                form.setFieldsValue({
                    ...initData,
                    cavalry: Adaptive[initData.cavalry],
                    mauler: Adaptive[initData.mauler],
                    bowman: Adaptive[initData.bowman],
                    spearman: Adaptive[initData.spearman],
                    apparatus: Adaptive[initData.apparatus],
                });
            }
        }
        // return () => {
        //     // cleanup
        // };
    }, [visible]);

    return (
        <div className={style.titlebar}>
            <Modal
                title="武将录入"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                getContainer={false}
                maskClosable={false}
                width={760}
                bodyStyle={{ padding: 10, height: 700, overflowY: 'auto' }}
                confirmLoading={loading}
            >
                <Form form={form} {...formItemLayout} initialValues={initData}>
                    <Item
                        name="name"
                        label="姓名"
                        hasFeedback
                        rules={[{ required: true, message: '请输入武将姓名' }]}
                    >
                        <Input />
                    </Item>

                    <Form.Item name="camp" label="阵营">
                        <Radio.Group buttonStyle="solid">
                            <Radio.Button value={1}>魏</Radio.Button>
                            <Radio.Button value={2}>蜀</Radio.Button>
                            <Radio.Button value={3}>吴</Radio.Button>
                            <Radio.Button value={4}>群</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        name="quality"
                        label="星级"
                        rules={[
                            {
                                required: true,
                                type: 'number',
                                min: 2,
                                message: '请选择星级，最小2星',
                            },
                        ]}
                    >
                        <Rate allowClear={false} />
                    </Form.Item>

                    <Form.Item name="controlVal" label="统御值">
                        <Slider
                            key="controlVal"
                            dots={true}
                            min={2}
                            max={9}
                            marks={controlMarks}
                        />
                    </Form.Item>

                    <Form.Item name="cavalry" label="骑兵">
                        <Slider
                            key="cavalry"
                            dots={true}
                            min={1}
                            max={4}
                            marks={adaptive}
                        />
                    </Form.Item>

                    <Form.Item name="mauler" label="盾兵">
                        <Slider
                            key="mauler"
                            dots={true}
                            min={1}
                            max={4}
                            marks={adaptive}
                        />
                    </Form.Item>

                    <Form.Item name="bowman" label="弓兵">
                        <Slider
                            key="bowman"
                            dots={true}
                            min={1}
                            max={4}
                            marks={adaptive}
                        />
                    </Form.Item>

                    <Form.Item name="spearman" label="枪兵">
                        <Slider
                            key="spearman"
                            dots={true}
                            min={1}
                            max={4}
                            marks={adaptive}
                        />
                    </Form.Item>

                    <Form.Item name="apparatus" label="器械">
                        <Slider
                            key="apparatus"
                            dots={true}
                            min={1}
                            max={4}
                            marks={adaptive}
                        />
                    </Form.Item>

                    <Form.Item name="advanced" label="进阶等级">
                        <Slider
                            dots={true}
                            min={0}
                            max={5}
                            marks={{
                                0: '0',
                                1: '1',
                                2: '2',
                                3: '3',
                                4: '4',
                                5: '5',
                            }}
                        />
                    </Form.Item>

                    <Form.Item name="level" label="等级">
                        <InputNumber min={1} max={50} />
                    </Form.Item>

                    <Form.Item
                        name="tags"
                        label="标签"
                        rules={[
                            {
                                required: true,
                                message: '请选择标签',
                                type: 'array',
                            },
                        ]}
                    >
                        <Checkbox.Group>
                            <Checkbox
                                value="武"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                武
                            </Checkbox>
                            <Checkbox
                                value="战"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                战
                            </Checkbox>
                            <Checkbox
                                value="盾"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                盾
                            </Checkbox>
                            <Checkbox
                                value="控"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                控
                            </Checkbox>
                            <Checkbox
                                value="谋"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                谋
                            </Checkbox>
                            <Checkbox
                                value="辅"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                辅
                            </Checkbox>
                            <Checkbox
                                value="医"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                医
                            </Checkbox>
                            <Checkbox
                                value="兼"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                兼
                            </Checkbox>
                            <Checkbox
                                value="仙"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                仙
                            </Checkbox>
                            <Checkbox
                                value="黄"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                黄
                            </Checkbox>
                            <Checkbox
                                value="蛮"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                蛮
                            </Checkbox>
                            <Checkbox
                                value="政"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                政
                            </Checkbox>
                            <Checkbox
                                value="魅"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                魅
                            </Checkbox>
                            <Checkbox
                                value="卒"
                                style={{
                                    lineHeight: '32px',
                                    marginLeft: 0,
                                    marginRight: 8,
                                }}
                            >
                                卒
                            </Checkbox>
                        </Checkbox.Group>
                    </Form.Item>

                    <Form.Item
                        name="isAwaken"
                        label="是否觉醒"
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>

                    <Form.Item
                        name="fate"
                        label="缘分武将"
                        rules={[
                            {
                                required: false,
                                message: '请选择缘分武将',
                                type: 'array',
                            },
                        ]}
                    >
                        <Select mode="multiple" placeholder="缘分武将">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="isPureGeneral"
                        label="非内政武将"
                        valuePropName="checked"
                    >
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
            <Button
                type="primary"
                size="small"
                onClick={() => setVisible(true)}
            >
                武将录入
            </Button>
        </div>
    );
}

export default function() {
    const [visible, setVisible] = useState(false);
    const [initData, setInitData] = useState({ ...emptyData });
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(20);

    const getFlag = (flag: boolean) => (flag ? '是' : '否');

    const getData = async () => {
        try {
            setLoading(true);
            const ret = await _getGeneral();
            setData(dealData(ret || []));
        } catch (error) {
            setData([]);
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
    }, [current, pageSize]);

    return (
        <div className={style.p_sanguo}>
            <Edit
                getData={getData}
                initData={initData}
                visible={visible}
                setVisible={setVisible}
                setInitData={setInitData}
            />
            <Table
                columns={columns}
                rowKey="_id"
                dataSource={data}
                size="small"
                pagination={pagination}
                loading={loading}
                bordered={true}
            />
        </div>
    );
}
