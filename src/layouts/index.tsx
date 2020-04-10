import React, { useEffect } from 'react';
import {
    AppModelState,
    ConnectProps,
    Loading,
    connect,
    useIntl,
    Access,
    history,
    Dispatch,
} from 'umi';
import { Layout, Menu, Dropdown } from 'antd';
import { DownOutlined, LoginOutlined } from '@ant-design/icons';
import * as theme from '@/theme';
import { IPermission } from '@/types';
import {
    notShowInSiderMenuCodes,
    sideMenuIcons,
    canNotCloseTabs,
} from '@/appConfig';
import MyIcon from '@/_c/Icon';
import { getPermissionByCode, authByCode } from '@/utils/logic';
import NotAuth from '@/pages/401';
import '@/assets/styles/global.less';

const { SubMenu } = Menu;

interface PageProps extends ConnectProps {
    app: AppModelState;
    loading: boolean;
    dispatch: Dispatch;
}

const BaseLayout: React.FC<PageProps> = ({ app, children, dispatch }) => {
    const intl = useIntl();
    const { isLogin, nickName, permissions, activeCode, openTabs } = app;
    // const access = useAccess();
    // console.log('BaseLayout', access)

    const rightInfoClick = ({ key }: { key: string }) => {
        if (key === 'logout') {
            dispatch({ type: 'app/logout' });
        }
    };

    useEffect(() => {
        if (!isLogin) {
            history.push('/login');
        }
    }, [isLogin]);

    const filterMenus = (menus: IPermission[]): IPermission[] =>
        menus.filter(
            item => !notShowInSiderMenuCodes.some(cd => item.code === cd),
        );

    const menuItem = (menu: IPermission) => {
        const { code, name, children, type } = menu;
        const iconType = (sideMenuIcons as any)[code];
        if (!!children && children.length && type !== 'menu') {
            return (
                <SubMenu
                    key={code}
                    title={
                        <span>
                            {code in sideMenuIcons && (
                                <MyIcon type={iconType} />
                            )}
                            <span>{name}</span>
                        </span>
                    }
                >
                    {filterMenus(children).map(item => menuItem(item))}
                </SubMenu>
            );
        } else {
            return (
                <Menu.Item key={code}>
                    {code in sideMenuIcons && <MyIcon type={iconType} />}
                    <span>{name}</span>
                </Menu.Item>
            );
        }
    };

    const handleMenuClick = ({ key }: { key: string }) => {
        const curItem = getPermissionByCode(permissions, key);
        // console.log('curItem', curItem)
        dispatch({
            type: 'app/selectTab',
            payload: {
                code: key,
                name: curItem.name,
            },
        });
    };

    const handleMenuClose = (code: string) => {
        dispatch({
            type: 'app/closeTab',
            payload: {
                code,
            },
        });
    };

    // console.log('v', authByCode(activeCode))
    // console.log('isLogin', isLogin)

    return !isLogin ? null : (
        <Layout className="root_layout">
            <Layout.Header className="global_header">
                <div className={`logo`}>
                    <img src="" alt="" />
                </div>

                <ul className="tabs_title_list">
                    {openTabs.map(tab => {
                        return (
                            <li
                                key={tab.code}
                                className={`tab_title_item ${
                                    tab.code === activeCode ? 'active' : ''
                                }`}
                            >
                                <div
                                    className="trapezoid"
                                    onClick={() => {
                                        handleMenuClick({ key: tab.code });
                                    }}
                                ></div>
                                <span
                                    className="title"
                                    onClick={() => {
                                        handleMenuClick({ key: tab.code });
                                    }}
                                >
                                    {tab.name}
                                </span>
                                {!canNotCloseTabs.some(c => c === tab.code) && (
                                    <MyIcon
                                        type="icon-baseline-close-px"
                                        className="close"
                                        onClick={e => {
                                            e.stopPropagation();
                                            handleMenuClose(tab.code);
                                        }}
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                <Dropdown
                    trigger={['click']}
                    placement="bottomRight"
                    overlay={
                        <Menu theme="dark" onClick={rightInfoClick}>
                            <Menu.Item key="logout">
                                <LoginOutlined />
                                {intl.formatMessage({
                                    id: 'LOGOUT',
                                    defaultMessage: '退出',
                                })}
                            </Menu.Item>
                        </Menu>
                    }
                >
                    <div className="right_info">
                        {nickName}
                        <DownOutlined style={{ marginLeft: 10 }} />
                    </div>
                </Dropdown>
            </Layout.Header>

            <Layout className="global_layout">
                <Layout.Sider
                    className="global_sider"
                    width={200}
                    collapsible
                    collapsedWidth={theme.menuCollapsedWidth}
                >
                    {permissions && permissions.length ? (
                        <Menu
                            className="sider_menu"
                            mode="inline"
                            onClick={handleMenuClick}
                            selectedKeys={[activeCode]}
                            // defaultOpenKeys={['sub1']}
                        >
                            {filterMenus(permissions).map(menu =>
                                menuItem(menu),
                            )}
                        </Menu>
                    ) : null}
                </Layout.Sider>

                <Layout.Content className="global_content">
                    <Access
                        // accessible={authByCode(activeCode)}
                        accessible={true}
                        fallback={<NotAuth />}
                    >
                        {children}
                    </Access>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

// export default BaseLayout
export default connect(({ app }: { app: AppModelState; loading: Loading }) => ({
    app,
}))(BaseLayout);
