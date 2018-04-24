import React from 'react';
import { Dropdown, Menu, Icon } from 'antd';

/**
 * @description 界面配置按钮
 * @author 傅兵
 * @class Jmsz
 * @extends {React.Component}
 */
class Jmpz extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                <a  rel="noopener noreferrer" href="#">编辑配置</a>
              </Menu.Item>
              <Menu.Item>
                <a  rel="noopener noreferrer" href="#">查询配置</a>
              </Menu.Item>
              <Menu.Item>
                <a  rel="noopener noreferrer" href="#">列表配置</a>
              </Menu.Item>
              <Menu.Item>
                <a  rel="noopener noreferrer" href="#">浏览配置</a>
              </Menu.Item>
            </Menu>
          )
        return (
            <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                <a className="ant-dropdown-link" href="#" style={{color: '#000'}}>
                     <Icon type="setting" />界面配置
                </a>
            </Dropdown>
        )
    }
}

export default Jmpz;