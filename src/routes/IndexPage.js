import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from 'dva/router';
import { Layout, Menu, Icon} from 'antd';

const {Sider, Content } = Layout;

class IndexPage extends React.Component {
  state = {
    collapsed: false,
};


  render() {
    return (
      <Layout>
        <Sider style={{
          height: 600,
          backgroundColor:'#282b33'
        }}>

          <div >
            <h1 className={styles.logo}>E洁家政</h1>
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{
              backgroundColor:'#282b33'
            }}>
            <Menu.Item key="1">
              <Link to="/customer"><Icon type="user" />
              <span className={styles.span}>客户管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/category"><Icon type="appstore" />
                <span className={styles.span}>分类管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/product"><Icon type="project" />
                <span className={styles.span}>产品管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/waiter"><Icon type="team" />
                <span className={styles.span}>工人管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
            <Link to="/order"><Icon type="bars" />
                <span className={styles.span}>订单管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link to="/comment"><Icon type="container" />
              <span className={styles.span}>评论管理</span>
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <div style={{  background: '#f6f9fa', minHeight: 300 }}>
              {this.props.children ? this.props.children : 
                <h1>欢迎进入E洁家政后台管理系统</h1>
              }
            </div>

          </Content>
        </Layout>
      </Layout>
    );
  }
}



export default connect()(IndexPage);
