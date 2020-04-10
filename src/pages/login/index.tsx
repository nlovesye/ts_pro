import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { history, useDispatch, useSelector, AppModelState, Loading } from 'umi';
import { _login } from '@/services';
import style from './style.css';

// interface LoginRes {
//   access_token: string;
//   refresh_token: string;
//   token_type: string;
//   expires_in: number;
//   scope: string;
//   companyId: number | null;
//   id: number;
//   isAllClientProject: boolean;
//   organizationName: string;
//   username: string;
//   permissions: any[];
// }

const Login: React.FC = () => {
    const { isLogin, loginLoading } = useSelector(
        ({ app, loading }: { app: AppModelState; loading: Loading }) => ({
            isLogin: app.isLogin,
            loginLoading: loading.effects['app/login'],
        }),
    );
    const dispatch = useDispatch();

    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };
    const tailLayout = {
        wrapperCol: { offset: 6, span: 18 },
    };
    const btnLayout = {
        wrapperCol: { span: 24 },
    };

    const onFinish = async (values: any) => {
        const { userName, password, remember } = values;
        dispatch({
            type: 'app/login',
            payload: { userName, password },
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if (isLogin) {
            history.push('/');
        }
        // console.log('is', isLogin)
        // return () => {
        //     cleanup
        // }
    }, [isLogin]);

    return (
        <div className={style.p_login}>
            <Form
                className={style.login_form}
                {...layout}
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <h1 className={style.title}>shit平台</h1>
                <Form.Item
                    label="用户名"
                    name="userName"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    {...tailLayout}
                    name="remember"
                    valuePropName="checked"
                >
                    <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <Form.Item {...btnLayout}>
                    <Button
                        block={true}
                        type="primary"
                        htmlType="submit"
                        loading={loginLoading}
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
