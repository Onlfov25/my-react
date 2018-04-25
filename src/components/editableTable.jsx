import React from 'react';
import { Table, Input, Popconfirm, Switch } from 'antd';
import './editableTable.less';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `类型 ${i}`,
    code: 'year',
    type: '字符串',
    description: '无',
    default: '无',
    isNull: '无',
    len: '0-255',
    mode: '',
    editShow: '',
    listShow: ''
  });
}

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

        const datas = [{
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

class EditableTable extends React.Component {
  constructor(props) {
    super(props);

        this.columns = [{
            title: '名称',
            dataIndex: 'name',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'name'),
          }, {
            title: '代码',
            dataIndex: 'code',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'code'),
          }, {
            title: '类型',
            dataIndex: 'type',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'type'),
          }, {
            title: '说明',
            dataIndex: 'description',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'description'),
          },{
            title: '默认值',
            dataIndex: 'default',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'default'),
          },{
            title: '字典',
            dataIndex: 'dictionary',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'dictionary'),
          },{
            title: '是否为空',
            dataIndex: 'isNull',
            width: '8%',
            render: () => <Switch />
            // render: (text, record) => this.renderColumns(text, record, 'isNull'),
          },{
            title: '长度区间',
            dataIndex: 'len',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'len'),
          }, {
            title: '格式',
            dataIndex: 'mode',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'mode'),
          },{
            title: '编辑显示',
            dataIndex: 'editShow',
            width: '8%',
            render: () => <Switch defaultChecked />
            // render: (text, record) => this.renderColumns(text, record, 'editShow'),
          }, {
            title: '列表显示',
            dataIndex: 'listShow',
            width: '8%',
            render: () => <Switch />
            // render: (text, record) => this.renderColumns(text, record, 'listShow'),
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
                        <Popconfirm title="确定删除？" onConfirm={() => this.cancel(record.key)}>
                          <a>Cancel</a>
                        </Popconfirm>
                      </span>
                      : <a onClick={() => this.edit(record.key)}>Edit</a>
                  }
                </div>
              );
            },
          }];
    this.column = [{
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      render: (text, record) => this.renderColumns(text, record, 'name'),
    }, {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      render: (text, record) => this.renderColumns(text, record, 'age'),
    }, {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      render: (text, record) => this.renderColumns(text, record, 'address'),
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
    this.state = { data };
    this.cacheData = data.map(item => ({ ...item }));
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    );
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  edit(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target.editable = true;
      this.setState({ data: newData });
    }
  }
  save(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      delete target.editable;
      this.setState({ data: newData });
      this.cacheData = newData.map(item => ({ ...item }));
    }
  }
  cancel(key) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
      delete target.editable;
      this.setState({ data: newData });
    }
  }
  render() {
    return <Table id="editTable" bordered dataSource={this.state.data} columns={this.columns} rowSelection={{}}/>;
  }
}

export default EditableTable;