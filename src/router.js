import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage';
import WaiterPage from './routes/WaiterPage';
import ProductPage from './routes/ProductPage';
import CommentPage from './routes/CommentPage';
import OrderPage from './routes/OrderPage';
import CategoryPage from './routes/CategoryPage'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/customer/findAllCustomer" exact component={CustomerPage} />
        {/* <Route path="/orderLine" exact component={OrderLinePage} /> */}
        <Route path="/customer" exact component={CustomerPage} />
        {/* <Route path="/order" exact component={OrderPage} /> */}
        <Route path="/waiter/findAll" exact component={WaiterPage} />
        <Route path="/product/findAll" exact component={ProductPage} />
        <Route path="/Order/findAllOrder" exact component={OrderPage} />
        <Route path="/comment/findAllcomment" exact component={CommentPage} />
        <Route path="/category/findAll" exact component={CategoryPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
