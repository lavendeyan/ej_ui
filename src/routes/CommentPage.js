import React from 'react';
// 引入css进行页面美化
import styles from './CommentPage.css'
// 导入组件
import {Button, Table} from 'antd'
import axios from '../utils/axios'

// 组件类必须要继承React.Component，是一个模块，订单子功能
class CommentPage extends React.Component {
  // 局部状态state
  constructor(){
    super();
    this.state = {
      ids:[], // 批量删除的时候保存的id
      list:[],
      loading:false,
      visible:false,  //打开visible可视窗口
      comment:{}
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
    axios.get("/comment/findAllcomment")
    .then((result)=>{
      // 将查询数据更新到state中
      this.setState({list:result.data})
    })
    .finally(()=>{
      this.setState({loading:false});
    })
  }


  // 组件类务必要重写的方法，表示页面渲染
  render(){
    // 变量定义
    let columns = [{
      title:'用户名',
      dataIndex:'id'
    },{
      title:'订单号',
      dataIndex:'order_id'
    },{
      title:'评价',
      dataIndex:'content'
    },{
      title:'日期',
      dataIndex:'content_time'
    }]
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    
    // 返回结果 jsx(js + xml)
    return (
      <div className={styles.customer}>
        <div className={styles.title}><h1 align = "center">评论管理  OrderPage</h1></div>
        <div className={styles.btns}>
          <Button>审核</Button> &nbsp;

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


export default CommentPage;