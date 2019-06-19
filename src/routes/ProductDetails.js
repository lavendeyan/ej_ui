import React from 'react'
import {Button,Table } from 'antd'
import axios from '../utils/axios';

class ProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          comments:[],
        }
      }
      
  componentDidMount(){
    let payload = this.props.location.payload;
    
    if(payload){
        this.commentLoading();
    }else{
        this.props.history.push("/product")
    }
  }
  commentLoading(){
    axios.get("/product/findById",{
        params:{id:this.props.location.payload.id}
      })
      .then((result)=>{
        this.setState({
            comments:result.data
        })
       
      })
  }

render(){
    let columns = [{
        title:'评论',
        dataIndex:'content'
      },{
        title:'时间',
        dataIndex:'commentTime'
      }]
    return(
        <div>
        
          <Table 
          bordered
          rowKey="id"
          size="small"
          loading={this.state.loading}
          columns={columns}
          dataSource={this.state.comments}/>
 <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
        </div>
    )
}

}


export default ProductDetails;
