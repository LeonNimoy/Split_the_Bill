import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </>
);
export default Routes;
