import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'containers/home';
import Login from 'components/login';

const routes = [
  <Route exact path="/" component={Home} />,
  <Route path="/login" component={Login} />,
];

export default routes;
