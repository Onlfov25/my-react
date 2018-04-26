import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Layout from './pages/layout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dwxx from './pages/dwxx';
import Ysjgl from './pages/ysjgl';

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home} />
                <Route path="home" component={Home} />
                <Route path="xtsz/dwxx" component={Dwxx}/>
                <Route path="xtsz/ysjgl" component={Ysjgl}/>
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
    )
}