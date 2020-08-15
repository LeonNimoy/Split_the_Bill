import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Customer from '../pages/Customer.page';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Customer} exact />
    </Switch>
  </BrowserRouter>
);
export default Routes;
