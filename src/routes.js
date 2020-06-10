import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Linker from './components/Linker';
import LinkerAdmin from './components/LinkerAdmin';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Linker} />
            <Route exact path="/admin" component={LinkerAdmin} />
        </Switch>
    </Router>
);

export default Routes;
