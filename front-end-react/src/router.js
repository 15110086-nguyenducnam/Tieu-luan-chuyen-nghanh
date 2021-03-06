import React from 'react';
import App from './app/App';
import * as PATH from './constants/routeConstants';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

export default (
    <Router>
        <Switch>
            <Route path={PATH.HOME_URL} component={App} />
        </Switch>
    </Router>
)