// import React from 'react';

// class Home extends React.Component {

//     render() {
//         return (
//             <span>home</span>
//         )
//     }
// }

// export default Home;
import React from 'react';
import { Layout, Card, Tabs, Row, Col, Icon, Tag, Button, List, Spin, Menu } from 'antd';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts'
const { Content, Sider } = Layout;
const TabPane = Tabs.TabPane;
const { CheckableTag } = Tag;
const SubMenu = Menu.SubMenu;
const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
    { year: '1959 年', sales: 38 },
    { year: '1960 年', sales: 38 },
    { year: '1962 年', sales: 38 },
  ];
  const cols = {
    'sales': {tickInterval: 20},
  };
export default () => {
    return (
        <div>
            <Layout>
            <Sider style={{ background: '#fff', marginRight: '12px' }} width={200}>
                            <Card title="档案分类">
                                <Spin spinning={false}>
                                <Menu
                                    theme="light"
                                    style={{height: '100%', borderRight: 0, marginRight: '12px'}}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                >
                                    <SubMenu key="sub1" title={<span><Icon type="caret-down"  /><span>Navigation One</span></span>}>
                                        <Menu.Item key="1">Option 1</Menu.Item>
                                        <Menu.Item key="2">Option 2</Menu.Item>
                                        <Menu.Item key="3">Option 3</Menu.Item>
                                        <Menu.Item key="4">Option 4</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                                        <Menu.Item key="5">Option 5</Menu.Item>
                                        <Menu.Item key="6">Option 6</Menu.Item>
                                        <SubMenu key="sub3" title="Submenu">
                                            <Menu.Item key="7">Option 7</Menu.Item>
                                            <Menu.Item key="8">Option 8</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                   
                                </Menu>
                                </Spin>
                            </Card>
                 </Sider>
                <Content className="content">
                    <Row gutter={24}>
                        <Col span={14} style={{marginBottom: '36px'}}>
                            <Card title="公告" extra={<a href="#">更多<Icon type="right" /></a>} >
                                <List>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>档案系统操作说明</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>市档案局领导班子到省局汇报工作</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>关于下达2017年度南京市档案科技项目计划通知</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>开放档案公告</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}} />巡察工作公告</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>南京市档案馆关于向社会公开征集档案资料的公告</p></List.Item>
                                </List>
                            </Card>
                        </Col>
                        <Col span={10}>
                            <Card title="最新动态">
                                <List>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>1月2日 15:06  木木木  登录系统</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>1月2日 15:05  木林森  编辑了 元数据</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>1月2日 15:03  木林林  新增了 元数据</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>1月2日 15:02  木森森  登录系统</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>1月2日 15:01  林木森  登录系统</p></List.Item>
                                    <List.Item className="adList"><p><Icon type="pushpin-o" style={{marginRight: '5px'}}/>1月2日 15:00  森木林  退出系统</p></List.Item>
                                </List> 
                            </Card>
                        </Col>
                    </Row>
                        <Row gutter={24}>  
                            <Col span={14}>
                                <div className="monTag">
                                    <CheckableTag checked>历史总量</CheckableTag>
                                    <CheckableTag>9月</CheckableTag>
                                    <CheckableTag>10月</CheckableTag>
                                    <CheckableTag>11月</CheckableTag>
                                    <CheckableTag>本月</CheckableTag>
                                </div>
                                <div style={{backgroundColor: '#fff'}} style={{width: '750px'}}>
                                <Chart height={400} width={800} data={data} scale={cols} forceFit>
                                    <Axis name="year" />
                                    <Axis name="sales" />
                                    <Tooltip crosshairs={{type : "y"}}/>
                                    <Geom type="interval" position="year*sales" />
                                </Chart>
                                </div>
                            </Col>
                            <Col span={10}>
                                <h2>常用项入口</h2>
                                <Row gutter={10} type="flex" justify="space-around" >
                                    <Col span={12}><Button className="btnLink" herf="#">个人中心</Button></Col>
                                    <Col span={12}><Button className="btnLink" herf="#">档案利用</Button></Col>
                                    <Col span={12}><Button className="btnLink" herf="#">档案保管</Button></Col>
                                    <Col span={12}><Button className="btnLink" herf="#">档案鉴定</Button></Col>
                                </Row>
                            </Col>
                        </Row>
                </Content>


                       {/* <Sider style={{background: '#fff', marginLeft: '12px'}}>
                    <div style={{heigth: '165px'}}>
                        快速打印
                    </div>
                     <div>
                        <Tabs type="card">
                            <TabPane tab="Tab Title 1" key="1">
                                <p>Content of Tab Pane 1</p>
                                <p>Content of Tab Pane 1</p>
                                <p>Content of Tab Pane 1</p>
                            </TabPane>
                            <TabPane tab="Tab Title 2" key="2">
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                                <p>Content of Tab Pane 2</p>
                            </TabPane>
                        </Tabs>
                     </div>
                </Sider> */}
            </Layout>
        </div>
    )
}