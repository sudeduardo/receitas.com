import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch,} from "react-router-dom";

import Home from "./pages/Home";
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import PrivateRoute from "./components/PrivateRoute"

const App = () => (
    <Router>
        <Switch>
            <Route path="/login" exact component={Login}/>
            <PrivateRoute path="/" exact component={Home}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </Router>
);

export default App;