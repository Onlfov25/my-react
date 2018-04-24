import React from 'react';
import { Layout } from 'antd';
const { Content, Sider } = Layout;

export default (props) => {
    return (
        <Layout>
            <Sider width={200} style={{marginRight: '8px', backgroundColor: '#fff'}}>
                菜单树
            </Sider>
            <Content style={{backgroundColor: '#fff' }}>
                    {props.children}
            </Content>
        </Layout>
    )
}