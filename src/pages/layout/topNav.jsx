import React from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import PropTypes from 'prop-types'
const { Header } = Layout;
/**
 * @description 头部导航栏
 * @author 傅兵 
 * @class topNav
 * @extends {React.Component}
 */
class TopNav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
            const {store} = this.context;
            const state = store.getState();

        const menu1 = (
            <Menu>
                <Menu.Item key="0">
                    <a href="#">文件著录</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="1">
                    <a href="#">案卷著录</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <Header>
                    <div className="logo"><i>档案信息</i>管理系统</div>
                    <div className="user">
                        <Avatar icon="user" shape="circle" className="usrIcon"/><span>你好,&nbsp;&nbsp;<b>管理员</b></span>
                        <span>2018年4月18日 星期三{state.userinfo.age}</span>
                    </div>
                    <Menu className="nav" mode="horizontal">
                        <Menu.Item key="2">
                            <Dropdown trigger={['click']} overlay={menu1} placement="bottomCenter">
                                <a href="#"><img src="../../images/档案查询-选中.png"/><span>预归档</span></a>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

TopNav.contextTypes = {
    store: PropTypes.object
}
export default TopNav;