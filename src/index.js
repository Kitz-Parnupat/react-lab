import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,browserHistory } from 'react-router'
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Page1 from './Page1';


ReactDOM.render(
   <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/header" component={Header} />
        <Route path="/content" component={Content} />
        <Route path="/footer" component={Footer} />
        <Route path="/page1" component={Page1} />
   </Router>,document.getElementById('root')
);
//  <App/>,document.getElementById('root')