import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Item = Menu.Item;

/**
 * @description 目录树
 * @author 傅兵 
 * @class MenuTree
 * @extends {React.component}
 */
class MenuTree extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const SiderMenu = ([
            {
                key: '不动产档案', title: '不动产档案', children: [
                    {
                        key: '土地', title: '土地', children: [
                            {
                                key: '国有建设用地', title: '国有建设用地'
                            }, {
                                key: '集体建设用地', title: '集体建设用地'
                            }, {
                                key: '宅基地建设用地', title: '宅基地建设用地'
                            }
                        ]
                    }, {
                        key: '房屋', title: '房屋'
                    }, {
                        key: '林地', title: '林地'
                    }

                ]
                
            }, {
                key: '会计档案', title: '会计档案', children: [
                    {
                        key: '文件1', title: '文件1'
                    }, {
                        key: '文件1', title: '文件1'
                    }
                ]
            }, {
                key: '人事档案', title: '人事档案'
            }
        ])
        return (
            <Menu style={{width: 200}} mode="inline">
                { siderMenu.forEach((item, index) => {
                    if ( 'children' in item )
                })}
                <SubMenu key="文件夹" title={<span><Icon type="folder-open" />文件夹</span>}>
                        <Menu.Item key="文件1"><Icon type="file-text" />文件1</Menu.Item>
                        <Menu.Item key="文件2"><Icon type="file-text" />文件2</Menu.Item>
                        <Menu.Item key="文件3"><Icon type="file-text" />文件3</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default MenuTree;