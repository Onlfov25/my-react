import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import moment from 'moment';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
const { Header } = Layout;

import '../../../images/首页未选中.png'
/**
 * @description 头部导航栏
 * @author 傅兵 
 * @class topNav
 * @extends {React.Component}
 */
class TopNav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.createSubMenu = this.createSubMenu.bind(this);
    }

    生成二级菜单
    createSubMenu(subMenus) {
        if (!subMenus) {
            return '';
        }
        const len = subMenus.length - 1;
        return (
            <Menu>
                {subMenus.map((subMenu, index) => (
                    <Menu.Item key={subMenu.id}>
                        <Link to={subMenu.url}>{subMenu.title}</Link>
                    </Menu.Item>
                )
                )} 
            </Menu>
        )
    }

    render() {
   
        const menus = [
            {id: 1, imgSrc: '../../../images/首页未选中.png', title: '首页', subMenus: []},
            {id: 2, imgSrc: '../../../images/首页未选中.png', title: '预归档', subMenus: [
                {id: 1, url: 'login', title: '文件著录'},
                {id: 2, url: 'register', title: '案卷著录'},
            ]},
            {id: 3, imgSrc: '../../../images/首页未选中.png', title: '已归档', subMenus: [
                {id: 1, url: 'login', title: '文件级档案'},
                {id: 2, url: 'register', title: '案卷级档案'},
            ]}
        ];
        return (
            <Layout>
                <Header id="header">
                    <div className="logo clearfix">
                        <div className="logo-img clearfix"></div>
                        <div className="logo-title clearfix"><i>档案信息</i>管理系统</div>
                        
                    </div>
                    <div className="user">
                        <Avatar icon="user" shape="circle" className="userIcon" />
                        <span className="userName">你好,&nbsp;&nbsp;<b>管理员</b></span>
                        <span className="curTime">{moment().format('YYYY年MM月DD日 dddd')}</span>
                    </div>
                    <Menu className="nav clearfix" mode="horizontal">
                        {menus.map(menu => (
                            <Menu.Item key={menu.id}>
                                <Dropdown trigger={['click']} overlay={this.createSubMenu(menu.subMenus)} placement="bottomCenter">
                                    <a href="#"><img src={menu.imgSrc} /><span>{menu.title}</span></a>
                                </Dropdown>
                            </Menu.Item>
                        )
                        )}
                    </Menu>
                </Header>
            </Layout>
        )
    }
}

TopNav.defaultProps = {

}

TopNav.propTypes = {
    
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(TopNav);