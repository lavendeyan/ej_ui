import React from 'react';
import {Form,Modal,Input} from 'antd'

class AddressForm extends React.Component{
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
        
        // 将表单中没有出现的值做一个双向数据绑定
        //getFieldDecorator("id");
       // getFieldDecorator("status");
       // getFieldDecorator("phtot");

        return (
          <Modal
              visible={visible}
              title="添加地址信息"
              okText="提交"
              onCancel={onCancel}
              onOk={onCreate}
            >
              <Form layout="vertical" {...formLayout}>
                <Form.Item label="用户名">
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="城市">
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="地址">
                  {getFieldDecorator('address', {
                    rules: [{ required: true, message: '请输入地址!' }],
                  })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="联系方式">
                  {getFieldDecorator('telephone', {
                    rules: [{ required: true, message: '请输入联系方式!' }],
                  })(<Input.Password />)}
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
})(AddressForm);