import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import Layout from './pages/layout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home} />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </Router>
    )
}