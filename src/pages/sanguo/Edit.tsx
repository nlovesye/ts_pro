import React, { useState } from 'react';
import {
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
} from '@/services/api/general';
import { Adaptive, emptyData } from './index';

const { Item } = Form;
const { Option } = Select;

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

export default function Edit({
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

    React.useEffect(() => {
        if (visible) {
            if (initData._id !== 'add') {
                // console.log('initData', initData);
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

    // const formItemLayout = {
    //     labelCol: { span: 4 },
    //     wrapperCol: { span: 18 }
    // }

    return (
        <Modal
            title="武将录入"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            getContainer={false}
            maskClosable={false}
            width={'56%'}
            bodyStyle={{ padding: 10, height: 460, overflowY: 'auto' }}
            confirmLoading={loading}
        >
            <Form
                form={form}
                layout="inline"
                // {...formItemLayout}
                initialValues={initData}
            >
                <Item
                    name="name"
                    label="姓名"
                    hasFeedback
                    rules={[{ required: true, message: '请输入武将姓名' }]}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
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
                        style={{ width: 260 }}
                    />
                </Form.Item>

                <Form.Item name="cavalry" label="骑兵" required>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={4}>S</Radio.Button>
                        <Radio.Button value={3}>A</Radio.Button>
                        <Radio.Button value={2}>B</Radio.Button>
                        <Radio.Button value={1}>C</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="mauler" label="盾兵" required>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={4}>S</Radio.Button>
                        <Radio.Button value={3}>A</Radio.Button>
                        <Radio.Button value={2}>B</Radio.Button>
                        <Radio.Button value={1}>C</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="bowman" label="弓兵" required>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={4}>S</Radio.Button>
                        <Radio.Button value={3}>A</Radio.Button>
                        <Radio.Button value={2}>B</Radio.Button>
                        <Radio.Button value={1}>C</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="spearman" label="枪兵" required>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={4}>S</Radio.Button>
                        <Radio.Button value={3}>A</Radio.Button>
                        <Radio.Button value={2}>B</Radio.Button>
                        <Radio.Button value={1}>C</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="apparatus" label="器械" required>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={4}>S</Radio.Button>
                        <Radio.Button value={3}>A</Radio.Button>
                        <Radio.Button value={2}>B</Radio.Button>
                        <Radio.Button value={1}>C</Radio.Button>
                    </Radio.Group>
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
                        style={{ width: 200 }}
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
                    <Select
                        mode="multiple"
                        placeholder="缘分武将"
                        style={{ width: 200 }}
                    >
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
    );
}
