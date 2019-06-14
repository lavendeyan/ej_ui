import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Link } from 'dva/router';
import { Layout, Menu} from 'antd';
const {Sider, Content } = Layout;


class IndexPage extends React.Component {
  state = {
    collapsed: false,
};
// function IndexPage() {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to dva!</h1>
//       <div className={styles.welcome} />
//       <ul className={styles.list}>
//         <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
//         <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
//       </ul>
//     </div>
//   );
// }

// IndexPage.propTypes = {

// };


  render() {
    return (
      <Layout>
        <Sider style={{
          height: 600,
          backgroundColor:'#282b33'
        }}>

          <div className={styles.logo}>
            e洁家政
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{
              backgroundColor:'#282b33'
            }}>
            <Menu.Item key="1">
              <Link to="/customer">
                <span className={styles.span}>顾客管理</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
            <Link to="/category">
                <span className={styles.span}>分类管理</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
            <Link to="/address">
                <span className={styles.span}>地址管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/comment">
                <span className={styles.span}>评论管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
            <Link to="/waiter">
                <span className={styles.span}>工人管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link to="/comment">
                <span className={styles.span}>订单管理</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
            <Link to="/product">
                <span className={styles.span}>商品管理</span>
              </Link>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Content>
            <div style={{  background: '#f6f9fa', minHeight: 300 }}>{this.props.children ? this.props.children : <h1 className={styles.title}>e洁</h1>}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}



export default connect()(IndexPage);
