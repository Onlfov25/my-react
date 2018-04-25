import React from 'react';
import ColContainer from '../../components/colContainer.jsx';
import { Card, Dropdown, Table, Button } from 'antd';
import EditableTable from '../../components/editableTable.jsx';
import Jmpz from './containers/jmpz.jsx';
import './index.less';

/**
 * @description 元数据管理界面
 * @author 傅兵
 * @class Ysjgl
 * @extends {React.Component}
 */
class Ysjgl extends React.Component {
    constructor(props) {
        super(props)
        this.columns = [{
            title: '名称',
            dataIndex: 'name',
            render: (text, record) => this.renderColumns(text, record, 'name'),
          }, {
            title: '代码',
            dataIndex: 'code',
          }, {
            title: '类型',
            dataIndex: 'type',
          }, {
            title: '说明',
            dataIndex: 'description',
          },{
            title: '默认值',
            dataIndex: 'default',
          },{
            title: '字典',
            dataIndex: 'dictionary',
          },{
            title: '是否为空',
            dataIndex: 'isNull',
          },{
            title: '长度区间',
            dataIndex: 'len',
          }, {
            title: '格式',
            dataIndex: 'mode',
          },{
            title: '编辑显示',
            dataIndex: 'editShow',
          }, {
            title: '列表显示',
            dataIndex: 'listShow',
          }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
              const { editable } = record;
              return (
                <div className="editable-row-operations">
                  {
                    editable ?
                      <span>
                        <a onClick={() => this.save(record.key)}>Save</a>
                        <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                          <a>Cancel</a>
                        </Popconfirm>
                      </span>
                      : <a onClick={() => this.edit(record.key)}>Edit</a>
                  }
                </div>
              );
            },
          }];
    }
    
    render() {
        const columns = this.columns;
        //配置按钮
        const editBtn  = (
            <div className="editBtn">
                <Button icon="plus" >新增</Button>
                <Button icon="edit">编辑</Button>
                <Button icon="delete">删除</Button>
                <Button icon="file-text">查看日志</Button>
                <Button icon="file-excel">导入</Button>
                <Button icon="file-excel">导出</Button>
            </div>
        )
        //配置表格数据
        const data = [{
            key: '1',
            name: '类型',
            code: 'year',
            type: '字符串',
            description: '无',
            default: '无',
            isNull: '无',
            len: '0-255',
            mode: '',
            editShow: '',
            listShow: ''
        }]
        return (
            <ColContainer>
                <Card title="字段配置" extra={<Jmpz />} id="zdpz">
                    {/* <EditableTable title={() => editBtn }  rowSelection={{}} columns={columns} dataSource={data} /> */}
                    <EditableTable dataSource={data}/>
                </Card>
            </ColContainer> 
        )
    }
}

export default Ysjgl;