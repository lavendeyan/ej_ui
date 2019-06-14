import React from 'react';
import { Router, Route, Switch } from 'dva/router';


import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage';
import WaiterPage from './routes/WaiterPage';
import ProductPage from './routes/ProductPage';
import CommentPage from './routes/CommentPage';
import OrderPage from './routes/OrderPage';
import CategoryPage from './routes/CategoryPage';
import AddressPage from './routes/AddressPage';

// import Sider from './routes/Sider';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/* <Route path="/" exact component={Sider} /> */}
        <Route path="/" exact component={IndexPage} />
        <IndexPage>
           <Route path="/customer" exact component={CustomerPage} />
           <Route path="/waiter" exact component={WaiterPage} />
           <Route path="/product" exact component={ProductPage} />
           <Route path="/Order" exact component={OrderPage} />
           <Route path="/Address" exact component={AddressPage} />
           <Route path="/comment" exact component={CommentPage} />
           <Route path="/category" exact component={CategoryPage} />
        </IndexPage>
        
      </Switch>
    </Router>
  );
}                                                     
                                                       
                                                       
                                                       
                                                       
                                                       
                                                       // import React from 'react';


                                                        // import { Router, Route, Switch ,Link} from 'dva/router';
                                                        // // import React, { Component } from 'react';
                                                        // // import { Router, Route, browserHistory, IndexRoute } from 'react-router';
                                                        // // import App from './App';






                                                        // class Routers extends Component {
                                                        //   render(){
                                                        //       return(
                                                        //           <Router history={ browserHistory }>
                                                        //               <Route path="/" component={App}>
                                                        //                   {/* <IndexRoute component={PageOne} /> */}
                                                        //                   <Route path="/" exact component={IndexPage} />
                                                        //                   <Route path="/customer" exact component={CustomerPage} />
                                                        //                   <Route path="/customer" exact component={CustomerPage} />
                                                        //                   <Route path="/waiter" exact component={WaiterPage} />
                                                        //                   <Route path="/product" exact component={ProductPage} />
                                                        //                   <Route path="/Order" exact component={OrderPage} />
                                                        //                   <Route path="/Address" exact component={AddressPage} />
                                                        //                   <Route path="/comment" exact component={CommentPage} />
                                                        //                   <Route path="/category" exact component={CategoryPage} />  
                                                        //               </Route>
                                                        //           </Router> 
                                                        //       )
                                                        //   }   
                                                        // }




// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
         
//          <div className={styles.container}>
//           <div className={styles["left-nav"]}>
//               <div className={styles.title}>E洁家政管理系统</div>
//                 <ul>
//                   <li className={styles["nav-list-item"]}><Link to="/customer">顾客管理</Link></li>
//                   <li className={styles["nav-list-item"]}><Link to="/Order">订单管理</Link></li>
//                   <li className={styles["nav-list-item"]}><Link to="/product">产品管理</Link></li>
//                   <li className={styles["nav-list-item"]}><Link to="/waiter">工人管理</Link></li>
//                   <li className={styles["nav-list-item"]}><Link to="/Address">地址管理</Link></li>
//                   <li className={styles["nav-list-item"]}><Link to="/comment">评论管理</Link></li>
//                   <li className={styles["nav-list-item"]}><Link to="/category">分类管理</Link></li>
//                 </ul>
//             </div>
//             <div className={styles["right-content"]}>
//               <Switch>
//                 <Route path="/" exact component={IndexPage} />
//                 <Route path="/customer" exact component={CustomerPage} />
//                 <Route path="/waiter" exact component={WaiterPage} />
//                 <Route path="/product" exact component={ProductPage} />
//                 <Route path="/Order" exact component={OrderPage} />
//                 <Route path="/Address" exact component={AddressPage} />
//                 <Route path="/comment" exact component={CommentPage} />
//                 <Route path="/category" exact component={CategoryPage} />
//               </Switch>
//             </div>
//           </div>
          
//     </Router>
  // );
// }

export default RouterConfig;
