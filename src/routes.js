import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Linker from './components/Linker';
import LinkerAdmin from './components/LinkerAdmin';
import AuthenticatedRoute from './components/AuthenticateRoute';
import Login from './components/Login';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/:user" component={Linker} />
            <AuthenticatedRoute exact path="/:user/admin" component={LinkerAdmin} />
        </Switch>
    </Router>
);

export default Routes;
