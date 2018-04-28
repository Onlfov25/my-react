import React from 'react';
import { Table, Input, Icon, Button, Popconfirm, Switch } from 'antd';
import './dbEdit.less';
import '../images/hong.png';


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

class EditableCell extends React.Component {
    constructor(props) {
        super(props)
        this.edit = this.edit.bind(this)
        this.check = this.check.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: this.props.value,
            editable: false,
            isModify: false,
            oldValue: this.props.value
        }
    }
   
  handleChange(e){
    const value = e.target.value;
    this.setState({ value });
  }
  check(){
    this.setState({ editable: false });
    if (this.state.oldValue != this.state.value) {
      console.log(this.state.oldValue, this.state.value)
         this.setState({
           isModify: true
         })
    } else {
         this.setState({
           isModify: false
         })
    }
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit(){
      this.setState({
          editable: true
      })
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div  onDoubleClick={this.edit} onBlur={this.check} className={this.state.isModify? 'editable-cell isModified': 'editable-cell'}>
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                autoFocus 
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              {/* <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              /> */}
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
         
            </div>
        }
        {this.state.isModify ?  <img src="../images/hong.png" /> : null}
      </div>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '名称',
      dataIndex: 'name',
      width: '8%',
      onCell: (res) => {this.edit},
      render: (text, record) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, 'name')}
        />
      ),
    }, {
            title: '代码',
            dataIndex: 'code',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record,  'code'),
          }, {
            title: '类型',
            dataIndex: 'type',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record,  'type'),
          }, {
            title: '说明',
            dataIndex: 'description',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record, 'description'),
          },{
            title: '默认值',
            dataIndex: 'default',
            width: '8%',
            render: (text, record) => this.renderColumns(text, record,  'default'),
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
            render: (text, record) => this.renderColumns(text, record,  'len'),
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
          }
    
    // {
    //   title: 'age',
    //   dataIndex: 'age',
    // }, {
    //   title: 'address',
    //   dataIndex: 'address',
    // }, {
    //   title: 'operation',
    //   dataIndex: 'operation',
    //   render: (text, record) => {
    //     return (
    //       this.state.dataSource.length > 1 ?
    //       (
    //         <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
    //           <a href="javascript:;">Delete</a>
    //         </Popconfirm>
    //       ) : null
    //     );
    //   },
    // }
  ];

    this.state = {
      dataSource: data,
      count: 2,
    };
  }
  renderColumns(text, record, type){
        return (
        <EditableCell
          value={text}
          onChange={this.onCellChange(record.key, type)}
        />
      )
  }
  onCellChange(key, dataIndex){
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  onDelete(key){
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  handleAdd(){
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }
  render() {
    const { dataSource } = this.state;
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
        <Table id="ediTable" bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}


class DbEdit extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
        <EditableTable />      
        )
    }
}

export default DbEdit;
