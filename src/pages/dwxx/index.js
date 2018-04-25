import React from 'react';
import { Card, Form, Input, Icon, Button, Tooltip, message, notification } from 'antd';
import InputTip from './inputTip.jsx';
const FormItem = Form.Item;
const { TextArea } = Input;

import './index.less';
/**
 * @description 单位信息界面
 * @author 傅兵
 * @class Dwxx
 * @extends {React.Component}
 */
class Dwxx extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkQzh = this.checkQzh.bind(this)
        this.state = {
            tip: false
        }
    }
    
    //提交
    handleSubmit(e) {
        e.preventDefault();
        // message.success("保存成功！")
        notification.success({
            message: '保存成功！',
            placement: 'bottomRight'
        })

    }

    checkQzh(rule, value, callback) {
        console.log('hello')
        const form = this.props.form;
        var reg = /^(\w|\d){4,10}$/;
        var len = value.length;
        console.log(value, typeof value)
        if (!value.match(reg) || value === '' || value == null) {
            console.log("true")
             this.setState({
                tip: true
             })
            callback();
        } else {
            console.log("false")
            this.setState({
                tip: false
            })
            callback();
        }
    }

    
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 2 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
        return (
            <Card title="单位信息" id="dwxx" >
                <Form onSubmit={this.handleSubmit}>
                    <FormItem label="全宗号" {...formItemLayout}   className={this.state.tip? 'has-error' : ''}>
                        {getFieldDecorator('qzh', {
                            rules: [
                               {
                                validator: this.checkQzh
                               }
                            ]
                        })(<span>
                        <Input />
                        {this.state.tip? <InputTip title="3到10个字符"/> : null}
                        </span>)}
                    </FormItem>
                    <FormItem label="单位名称" {...formItemLayout} required>
                        {getFieldDecorator('dwmc', {
                            rules: [{
                                required: true, message: '请输入单位名称！',
                            },{
                                min: 3
                            },{
                                max: 10
                            }
                            ]
                        })(<span><Input />
                                <Tooltip title={<span><Icon  style={{color: 'red'}} type="exclamation-circle"/>3到10个字符</span>}>
		                        <Icon style={{fontSize: '20px', position: 'absolute',top: '1px', color: 'red'}} type="exclamation-circle" />
                            </Tooltip>
                            </span>
                )}
                    </FormItem>
                    <FormItem label="联系人" {...formItemLayout} required hasFeedback>
                        <Input />
                    </FormItem>
                    <FormItem label="联系方式" {...formItemLayout}>
                        <Input />
                    </FormItem>
                    <FormItem label="地址" {...formItemLayout}>
                        <TextArea rows={4} />
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </FormItem>
                </Form>
            </Card>
        )
    }
}

const DwxxForm = Form.create({})(Dwxx);
export default DwxxForm;