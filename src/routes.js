import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import LanguageRepo from './pages/LanguageRepo';
import Login from './pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route exact path="/user/:login" component={Details} />
      <Route path="/languageRepo" component={LanguageRepo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
