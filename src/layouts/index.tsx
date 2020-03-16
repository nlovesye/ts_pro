import React from 'react';
import {
  AppModelState,
  ConnectProps,
  Loading,
  connect,
  useIntl,
  useModel,
  Access,
  useAccess,
  history,
  Link,
} from 'umi';
import { Layout, Menu } from 'antd';
import * as theme from '@/theme';
import '@/assets/styles/global.less';

const { SubMenu } = Menu;

interface PageProps extends ConnectProps {
  app: AppModelState;
  loading: boolean;
}

const BaseLayout: React.FC<PageProps> = ({ children }) => {
  const { initialState } = useModel('@@initialState');
  // const intl = useIntl()
  const access = useAccess();
  // console.log('auth', initialState, access)
  if (!initialState?.isLogin) {
    history.replace('/login');
  }
  return (
    // <div>
    //     <Access
    //         accessible={access.index}
    //         fallback={<div>no auth</div>}
    //     >
    //         hi nihao
    //     </Access>
    //     {children}
    // </div>
    <Layout className="root_layout">
      <Layout.Header className="global_header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: `${theme.layoutHeaderHeight}px` }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Layout.Header>

      <Layout className="global_layout">
        <Layout.Sider
          className="global_sider"
          width={200}
          collapsible
          collapsedWidth={theme.menuCollapsedWidth}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  {/* <UserOutlined /> */}
                  subnav 1
                </span>
              }
            >
              <Menu.Item key="1">
                <Link to="/">Home Page</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/test">test Page</Link>
              </Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  {/* <LaptopOutlined /> */}
                  subnav 2
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  {/* <NotificationOutlined /> */}
                  subnav 3
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Layout.Sider>

        <Layout.Content className="global_content">{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default connect(({ app }: { app: AppModelState; loading: Loading }) => ({
  app,
}))(BaseLayout);
