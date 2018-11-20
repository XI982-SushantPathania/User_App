import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routers';
import store from './Store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
// import { Route } from "react-router";
// import history from './history';
ReactDOM.render(<Provider store={store}><Routes></Routes></Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
