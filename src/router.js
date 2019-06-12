import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage';
import WaiterPage from './routes/WaiterPage';
import ProductPage from './routes/ProductPage';
import CommentPage from './routes/CommentPage';
import CategoryPage from './routes/CategoryPage'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
{/* <<<<<<< HEAD */}
        <Route path="/customer/findAllCustomer" exact component={CustomerPage} />
{/* ======= */}
        {/* <Route path="/orderLine" exact component={OrderLinePage} /> */}
        <Route path="/customer" exact component={CustomerPage} />
        {/* <Route path="/order" exact component={OrderPage} /> */}
        <Route path="/waiter/findAll" exact component={WaiterPage} />
        <Route path="/product/findAll" exact component={ProductPage} />
        <Route path="/comment/findAllcomment" exact component={CommentPage} />
        <Route path="/category/findAll" exact component={CategoryPage} />
{/* >>>>>>> 12c974fe0c9f0aeca9b2d9d5a41847b3c4248a08 */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
