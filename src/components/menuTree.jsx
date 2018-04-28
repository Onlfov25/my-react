import React from 'react';
import { Menu, Icon } from 'antd';
import unChecked from '../images/下拉（未选中）.png';
import checked from '../images/拉下（选中）.png';
import './menuTree.less';
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
        this.createMenu = this.createMenu.bind(this)
        this.onOpenChange = this.onOpenChange.bind(this)
        this.state = {
            openKeys : []
        }
    }
    
    createMenu(menu) {
        {
             menu.map(item => {
                if ( item.children && item.children.length > 0) {
                return <SubMenu key={item.key} title={<span><Icon type="folder-open" />{item.title}</span>}></SubMenu>
               }
            })
        }
    }
    onOpenChange(openKeys) {
        console.log(openKeys)
        this.setState({
            openKeys: [...openKeys]
        })
    }
    render() {
        
        const SiderMenu = [
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
                
            }, 
            {
                key: '会计档案', title: '会计档案', children: [
                    {
                        key: '文件1', title: '文件1'
                    }, {
                        key: '文件2', title: '文件2'
                    }
                ]
            },

            {
                key: '人事档案', title: '人事档案'
            }
        ]
        return (
            <Menu style={{width: 200}} mode="inline" onOpenChange={this.onOpenChange}>
                <SubMenu key="文件夹" title={<span><img src={(this.state.openKeys.indexOf('文件夹') != -1) ? checked : unChecked}/><Icon type="folder-open" />文件夹</span>}>
                        {

                          SiderMenu.map(item => {
                                if ( item.children && item.children.length > 0) {
                                return (<SubMenu key={item.key} title={<span><img src={(this.state.openKeys.indexOf(item.key) != -1) ? checked : unChecked}/><Icon type="folder-open" />{item.title}</span>}>
                                    {
                                        item.children.map(tem => {
                                            if (tem.children && tem.children.length > 0) {
                                                return <SubMenu key={tem.key} title={<span><Icon type="folder-open" />{tem.title}</span>}></SubMenu>
                                            } else {
                                                return <Menu.Item key={tem.key}><Icon type="file-text" />{tem.title}</Menu.Item>
                                            }
                                        })
                                    }
                                </SubMenu>)
                               } else {
                                return <Menu.Item key={item.key}><Icon type="file-text" />{item.title}</Menu.Item>
                               }
                            })

                        }
                </SubMenu>
            </Menu>
        )
    }
}

export default MenuTree;