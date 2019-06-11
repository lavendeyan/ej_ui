import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import OrderLinePage from './routes/OrderLinePage'
import CustomerPage from './routes/CustomerPage'
// import OrderPage from './routes/OrderPage'
import WaiterPage from './routes/WaiterPage'

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
{/* >>>>>>> 12c974fe0c9f0aeca9b2d9d5a41847b3c4248a08 */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
