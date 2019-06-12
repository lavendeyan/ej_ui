import React from 'react';
import {Form,Modal,Input} from 'antd'


class CategoryForm extends React.Component{
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
        getFieldDecorator("name");
        getFieldDecorator("num");
        // getFieldDecorator("status");
        // getFieldDecorator("phtot");

        return (
          <Modal
              visible={visible}
              title="添加类别信息"
              okText="提交"
              onCancel={onCancel}
              onOk={onCreate}
            >
              <Form layout="vertical" {...formLayout}>
                <Form.Item label="类别名称">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入类别名称!' }],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="类别库存">
                  {getFieldDecorator('num', {
                    rules: [{ required: true, message: '请输入类别库存!' }],
                  })(<Input />)}
                </Form.Item>
                {/* <Form.Item label="密码">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码!' }],
                  })(<Input.Password />)}
                </Form.Item> */}
               
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
})(CategoryForm);