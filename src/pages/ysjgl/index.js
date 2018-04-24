import React from 'react';
import ColContainer from '../../components/colContainer.jsx';
import { Card, Dropdown } from 'antd';
import Jmpz from './containers/jmpz.jsx'

/**
 * @description 元数据管理界面
 * @author 傅兵
 * @class Ysjgl
 * @extends {React.Component}
 */
class Ysjgl extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ColContainer>
                <Card title="字段配置" extra={<Jmpz />}>
                    
                </Card>
            </ColContainer> 
        )
    }
}

export default Ysjgl;