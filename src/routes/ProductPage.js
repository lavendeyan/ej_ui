import React from 'react';
// 引入css进行页面美化
import styles from './ProductPage.css'//////////////////////////////////////////////////
// 导入组件
import {Modal,Button,Table,message} from 'antd'
import axios from '../utils/axios'

// 组件类必须要继承React.Component，是一个模块，顾客管理子功能
class ProductPage extends React.Component {////////////////////////////////////////////
  // 局部状态state
  constructor(){
    super();
    this.state = {
      list:[],
      loading:false
    }
  }
  // 在生命周期钩子函数中调用重载数据
  componentDidMount(){
    this.reloadData();
  }
  //1111
  // 查询重载数据
  reloadData(){
    this.setState({loading:true});
    axios.get("/product/findAll")/////////////////////////////////////////////
    .then((result)=>{
      // 将查询数据更新到state中
      this.setState({list:result.data})
    })
    .finally(()=>{
      this.setState({loading:false});
    })
  }

  // 批量删除
  handleBatchDelete(){
    Modal.confirm({
      title: '确定删除这些记录吗?',
      content: '删除后数据将无法恢复',
      onOk:() => {
        axios.post("/product/batchDelete",{ids:this.state.ids})///////////////////////////////////////
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
        axios.get("/product/deleteById",{//////////////////////////////////////////////////
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


  // 组件类务必要重写的方法，表示页面渲染///////////////////////////////////////////////////////////
  render(){
    // 变量定义
    let columns = [{
      title:'产品id',
      dataIndex:'id'
    },{
      title:'产品名称',
      dataIndex:'name'
    },{
      title:'描述',
      dataIndex:'description'
    },{
      title:'价格',
      dataIndex:'price'
    },{
      title:'操作',
      width:120,
      align:"center",
      render:(text,record)=>{
        return (
          <div>
            <Button type='link' size="small" onClick={this.handleDelete.bind(this,record.id)}>删除</Button>
            <Button type='link' size="small">修改</Button>
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
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    
    // 返回结果 jsx(js + xml)//////////////////////////////////////////////////////////////
    return (
      <div className={styles.customer}>
        <div className={styles.title}>
          <h1 align = "center">产品管理  ProductPage</h1>
        </div>
        <div className={styles.btns}>
          <Button>添加</Button> &nbsp;
          <Button onClick={this.handleBatchDelete.bind(this)}>批量删除</Button> &nbsp;
          <Button type="link">导出</Button>
        </div>
        <Table 
          bordered
          rowKey="id"
          size="small"
          loading={this.state.loading}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.list}/>

      </div>
    )
  }
}

export default ProductPage;//////////////////////////////////////////