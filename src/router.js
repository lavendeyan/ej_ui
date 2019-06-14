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


export default RouterConfig;
