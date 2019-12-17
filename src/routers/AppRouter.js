import React from 'react';
import createHistory from 'history/createBrowserHistory';

import ErrorPage from '../components/ErrorPage';
import Dashboard from '../components/Dashboard';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute.js';

//Router
import { Router, Route, Switch } from 'react-router-dom';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;