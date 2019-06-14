import dva from 'dva';
import './index.css';



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Routers from './router';
// import registerServiceWorker from './registerServiceWorker';



// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');






// ReactDOM.render(<Routers />, document.getElementById('root'));
// registerServiceWorker();