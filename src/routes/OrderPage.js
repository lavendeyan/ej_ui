import React from 'react';
// 引入css进行页面美化
import styles from './OrderPage.css'
// 导入组件
import {Modal,Button,Table,message} from 'antd'
import axios from '../utils/axios'
import OrderupForm from './OrderupForm'


import { Input } from 'antd';

const Search = Input.Search;





// 组件类必须要继承React.Component，是一个模块，顾客管理子功能
class OrderPage extends React.Component {
  // 局部状态state
  constructor(){
    super();
    this.state = {
      ids:[], // 批量删除的时候保存的id
      list:[],
      loading:false,
      visible:false,  //打开visible可视窗口
      customer:{}
    }
  }
  // 在生命周期钩子函数中调用重载数据
  componentDidMount(){
    this.reloadData();
  }
  //1111
  // 重载数据
  reloadData(){
    this.setState({loading:true});
    axios.get("/Order/findAllOrder")
    .then((result)=>{
      // 将查询数据更新到state中
      this.setState({list:result.data})
    })
    .finally(()=>{
      this.setState({loading:false});
    })
  }




//  // 搜索数据
//  reloadData(){
//   this.setState({loading:true});
//   axios.get("/comment/query")
//   .then((result)=>{
//     // 将查询数据更新到state中
//     this.setState({list:result.data})
//   })
//   .finally(()=>{
//     this.setState({loading:false});
//   })
// }



  // 批量删除
  handleBatchDelete(){
    Modal.confirm({
      title: '确定删除这些记录吗?',
      content: '删除后数据将无法恢复',
      onOk:() => {
        axios.post("/Order/betchDelete",{ids:this.state.ids})
        .then((result)=>{
          //批量删除后重载数据
          message.success(result.statusText)
          this.reloadData();
        })
      }
    });
  }

  // 单个删除
  handleDelete(id){
    Modal.confirm({
      title: '确定删除这条记录吗?',
      content: '删除后数据将无法恢复',
      onOk:() => {
        // 删除操作
        axios.get("/Order/deleteByPrimaryKey",{
          params:{
            id:id
          }
        })
        .then((result)=>{
          // 删除成功后提醒消息，并且重载数据
          message.success(result.statusText);
          this.reloadData();
        })
      }
    });
  }

  // 取消按钮的事件处理函数
  handleCancel = () => {
    this.setState({ visible: false });
  };

// 确认按钮的事件处理函数
handleCreate = () => {
  const form = this.formRef.props.form;
  form.validateFields((err, values) => {
    if (err) {
      return;
    }
    // 表单校验完成后与后台通信进行保存
    axios.post("/Order/updateByPrimaryKey",values)/////////////////////////////////////////////
    .then((result)=>{
      message.success(result.statusText)
      form.resetFields();// 重置表单
      this.setState({ visible: false });// 关闭模态框
      this.reloadData();
    })
  });
};
  // 将子组件的引用在父组件中进行保存，方便后期调用
  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  // 去更新
  toEdit(record){

    // 更前先先把要更新的数据设置到state中
    this.setState({customer:record})
    // 将record值绑定表单中
    this.setState({visible:true})

  }

  

  // 组件类务必要重写的方法，表示页面渲染
  render() {
    // 变量定义
    let columns = [{
      title:'订单号',
      dataIndex:'id'
    },{
      title:'订单时间',
      dataIndex:'orderTime'
    },{
        title:'价钱',
        dataIndex:'total'
    },{
        title:'用户id',
        dataIndex:'customerId'
    },{
        title:'工人id',
        dataIndex:'waiterId'
    },{
      title:'衣服编号',
      dataIndex:'addressId'
    },{
      title:'操作',
      width:120,
      align:"center",
      render:(text,record)=>{
        return (
          <div>
            <Button type='link' size="small" onClick={this.handleDelete.bind(this,record.id)}>删除</Button>
            <Button type='link' size="small" onClick={this.toEdit.bind(this,record)}>修改</Button>
          </div>
        )
      }
    }]
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        // 当用户操作复选按钮的时候，将值获取到并且保存到state中
        this.setState({
          ids:selectedRowKeys
        })
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', 
        name: record.name,
      }),
    };
    

    return (
      <div className={styles.customer}>
        <div className={styles.title}><h1 align = "center">订单管理  OrderPage</h1></div>
        <div className={styles.btns}>
          <Button onClick={this.handleBatchDelete.bind(this)}>批量删除</Button> &nbsp;
          <Button type="link">导出</Button>
          
          <Search 
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
          />
        </div>
        <Table 
          bordered
          rowKey="id"
          size="small"
          loading={this.state.loading}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.list}/>

          <OrderupForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}/>

      </div>
    )
  }
}

export default OrderPage;