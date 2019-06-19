import React from 'react';
import styles from './WaiterPage.css'// 引入css进行页面美化
import {Modal,Button,Table,message,Input,Icon,Upload, } from 'antd'// 导入组件
import axios from '../utils/axios'
import WaiterForm from './WaiterForm';
import * as XLSX from 'xlsx';




// 组件类必须要继承React.Component，是一个模块，顾客管理子功能
class WaiterPage extends React.Component {
  // 局部状态state
  constructor(){
    super();
    this.state = {
      ids:[], // 批量删除的时候保存的id
      list:[],
      loading:false,
      visible:false,  //打开visible可视窗口
      waiter:{}
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
    axios.get("/waiter/findAll")
    .then((result)=>{
      this.setState({list:result.data})// 将查询数据更新到state中
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
        axios.post("/waiter/batchDelete",{
          ids:this.state.ids})
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
        axios.get("/waiter/deleteById",{
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
    axios.post("/waiter/Update",values)/////////////////////////////////////////////
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

//模糊查询  
query = (value)=>{
  this.setState({loading:true});
  axios.get("/waiter/query",{
    params:{
      realname: value,

    }
  })
  .then((result)=>{
    // 将查询数据更新到state中
    this.setState({list:result.data})
  })
  .finally(()=>{
    this.setState({loading:false});
  })
}

//搜索
toEarch(record){
  alert(record);
}

// 去添加
toAdd(){
  // 将默认值置空,模态框打开
  this.setState({waiter:{},visible:true})
  // this.setState({ visible:true})
}

// 去更新
toEdit(record){
  // 更前先先把要更新的数据设置到state中
  this.setState({waiter:record})
  // 将record值绑定表单中
  this.setState({visible:true})

}



//批量导入
onImportExcel = file => {
  // 获取上传的文件对象
  const { files } = file.target;
  // 通过FileReader对象读取文件
  const fileReader = new FileReader();
  fileReader.onload = event => {
    try {
      const { result } = event.target;
      // 以二进制流方式读取得到整份excel表格对象
      const workbook = XLSX.read(result, { type: 'binary' });
      let data = []; // 存储获取到的数据
      // 遍历每张工作表进行读取（这里默认只读取第一张表）
      for (const sheet in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty(sheet)) {
          // 利用 sheet_to_json 方法将 excel 转成 json 数据
          data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
          // break; // 如果只取第一张表，就取消注释这行
        }
      }
      console.log(data);
    } catch (e) {
      // 这里可以抛出文件类型错误不正确的相关提示
      console.log('文件类型不正确');
      return;
    }
  };
  // 以二进制方式打开文件
  fileReader.readAsBinaryString(files[0]);
}



  // 组件类务必要重写的方法，表示页面渲染
  render(){
    // 变量定义
    let columns = [{
      title:'工人id',
      dataIndex:'id'
    },{
      title:'工人姓名',
      dataIndex:'realname'
    },{
      title:'身份证号',
      dataIndex:'idcard'
    },{
      title:'手机号',
      dataIndex:'telephone'
    },{
      title:'密码',
      dataIndex:'password'
    },{
      title:'状态',
      dataIndex:'status'
    },{
      title:'头像',
      dataIndex:'id'
    },{
      title:'操作',
      width:120,
      align:"center",

    render:(text,record)=>{
        return (
          <div>
            <Button type='link' size="small" 
            onClick={this.handleDelete.bind(this,record.id)}>删除</Button>
            <Button type='link' size="small" 
            onClick={this.toEdit.bind(this,record)}>修改</Button>
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

    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    //搜索框
    const Search = Input.Search;
    
    // 返回结果 jsx(js + xml)
    return (
      <div className={styles.waiter}>
        <div className={styles.title}>
          <h1 align = "center">工人管理  WaiterPage</h1></div>
          <div className={styles.btns} style={{display:"flex"}}>
          <div>
            <Button 
              onClick={this.toAdd.bind(this)}>单个导入</Button> &nbsp;
            
            <Button 
              onClick={this.handleBatchDelete.bind(this)}>批量删除</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Button 
              onClick={this.reloadData.bind(this)}>返回</Button>
            <Search 
              placeholder="模糊查询"
              onSearch={value => {this.query(value)}}
              style={{ width: 200 }}
            />
          </div>
          <div>
           <Upload {...props} accept='.xlsx, .xls'>
              <Button  onClink={this.onImportExcel} >
                <Icon type="upload" /> 批量导入</Button>
            </Upload>&nbsp;
          </div>
        </div>

        <Table 
          bordered
          rowKey="id"
          size="small"
          loading={this.state.loading}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.list}/>
        <WaiterForm
          initData={this.state.waiter}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}/>

      </div>
    )
  }
}

export default WaiterPage;