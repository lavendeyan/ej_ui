import React from 'react';
import {Form,Modal,Input} from 'antd'

class OrderupForm extends React.Component{
    render(){
      const formLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
  }

        // 父组件传递给子组件值
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        
        //将表单中没有出现的值做一个双向数据绑定
        getFieldDecorator("customerId");
        getFieldDecorator("waiterId");
        getFieldDecorator("addressId");

        return (
          <Modal
              visible={visible}
              title="修改订单信息"
              okText="提交"
              onCancel={onCancel}
              onOk={onCreate}
            >
              <Form layout="vertical" {...formLayout}>
                <Form.Item label="订单号">
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入订单号!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="订单时间">
                  {getFieldDecorator('orderTime', {
                    rules: [{ required: true, message: '请输入订单时间!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="价格">
                  {getFieldDecorator('total', {
                    rules: [{ required: true, message: '请输入价格!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="用户id">
                  {getFieldDecorator('customerId', {
                    rules: [{ required: true, message: '请输入用户id!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="工人id">
                  {getFieldDecorator('waiterId', {
                    rules: [{ required: true, message: '请输入工人id!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="衣服编号">
                  {getFieldDecorator('addressId', {
                    rules: [{ required: true, message: '请输入物品编号!' }],
                  })(<Input />)}
                </Form.Item>
            
              </Form>
            </Modal>
        );
      }
}

// 将通过props从父组件中获取的值拿出来设置到表单元素上
const mapPropsToFields = (props)=>{
  let obj = {};
  for(let key in props.initData){
    let val = props.initData[key];
    obj[key] = Form.createFormField({value:val})
  }
  return obj;
}

export default Form.create({
  mapPropsToFields
})(OrderupForm);