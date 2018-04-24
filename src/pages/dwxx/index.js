import React from 'react';
import { Card, Form, Input, Icon, Button } from 'antd';
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
    }
    
    //提交
    handleSubmit(e) {
        e.preventDefault();
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
                    <FormItem label="全宗号" {...formItemLayout}  help="4-10个字符，支持数字、字母">
                        {getFieldDecorator('qzh', {
                            rules: [{
                                required: true, message: '请输入全宗号！'
                            }
                            ]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="单位名称" {...formItemLayout}>
                        {getFieldDecorator('dwmc', {
                            rules: [{
                                required: true, message: '请输入单位名称！'
                            }
                            ]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="联系人" {...formItemLayout}>
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