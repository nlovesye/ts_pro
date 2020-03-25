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
} from 'antd';
import { _getGeneral, _addGeneral } from '@/services';
import style from './style.less';

const { Item } = Form;
const { Option } = Select;

const adaptive = {
    1: 'C',
    2: 'B',
    3: 'A',
    4: 'S',
};

function Edit({ getData }) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleOk = async () => {
        try {
            setLoading(true);
            const d = await form.validateFields();
            console.log('d', d);
            await _addGeneral(d);
            setVisible(false);
            getData();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 18 },
    };

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
                <Form
                    form={form}
                    {...formItemLayout}
                    initialValues={{
                        camp: 1,
                        quality: 3,
                        level: 1,
                        cavalry: 1,
                        mauler: 1,
                        bowman: 1,
                        spearman: 1,
                        apparatus: 1,
                        advanced: 0,
                        tags: [],
                        fate: [],
                        isAwaken: false,
                        isPureGeneral: true,
                    }}
                >
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
            <Button type="primary" onClick={() => setVisible(true)}>
                武将录入
            </Button>
        </div>
    );
}

export default function() {
    const [data, setData] = useState([]);
    const [current, setCurrent] = useState(1);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(20);

    // console.log('home')
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        },
        {
            title: '阵营',
            dataIndex: 'camp',
        },
        {
            title: '星级',
            dataIndex: 'quality',
        },
        {
            title: '骑兵',
            dataIndex: 'cavalry',
        },
        {
            title: '盾兵',
            dataIndex: 'mauler',
        },
        {
            title: '弓兵',
            dataIndex: 'bowman',
        },
        {
            title: '枪兵',
            dataIndex: 'spearman',
        },
        {
            title: '器械',
            dataIndex: 'apparatus',
        },
        {
            title: '进阶等级',
            dataIndex: 'advanced',
        },
        {
            title: '等级',
            dataIndex: 'level',
        },
        {
            title: '标签',
            dataIndex: 'tags',
        },
        {
            title: '是否觉醒',
            dataIndex: 'isAwaken',
        },
        {
            title: '缘分武将',
            dataIndex: 'fate',
        },
        {
            title: '缘分组数量',
            dataIndex: 'fateCount',
        },
        {
            title: '内政',
            dataIndex: 'isPureGeneral',
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

    const getData = async () => {
        try {
            const ret = await _getGeneral();
            setData(dealData(ret || []));
        } catch (error) {
            setData([]);
        }
    };

    React.useEffect(() => {
        getData();
        // return () => {
        //     cleanup
        // }
    }, [current, pageSize]);

    return (
        <div className={style.p_sanguo}>
            <Edit getData={getData} />
            <Table
                columns={columns}
                dataSource={data}
                size="middle"
                pagination={pagination}
            />
        </div>
    );
}
