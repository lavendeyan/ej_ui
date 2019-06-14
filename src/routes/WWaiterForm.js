import React from 'react';
import {Form,Modal,Input} from 'antd'



class WWaiterForm extends React.Component {

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
    getFieldDecorator("id");
    getFieldDecorator("status");
    getFieldDecorator("photo");
    getFieldDecorator("idcard");
    getFieldDecorator("password");
    return (
      <Modal
          visible={visible}
          title="工人信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical" {...formLayout}>
              <Form.Item label="工人id">
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入工人id!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="姓名">
                  {getFieldDecorator('realname', {
                    rules: [{ required: true, message: '请输入姓名!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="手机号">
                  {getFieldDecorator('telephone', {
                    rules: [{ required: true, message: '请输入手机号!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="身份证号">
                  {getFieldDecorator('idcard', {
                    rules: [{ required: true, message: '请输入身份证号!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="密码">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请设置密码!' }],
                  })(<Input.Password />)}
                </Form.Item>
                <Form.Item label="状态">
                  {getFieldDecorator('status', {
                    rules: [{ required: true, message: '请输入工人状态!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="图像">
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请上传工人图像!' }],
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
})(WWaiterForm);