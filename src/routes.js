import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/user/:login" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
