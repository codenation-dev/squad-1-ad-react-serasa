import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';
import LanguageRepo from './pages/LanguageRepo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/user/:login" component={Details} />
      <Route exact path="/languageRepo" component={LanguageRepo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
