import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'containers/home';
import Login from 'components/login';
import SignUp from 'components/sign_up';

const routes = [
  <Route exact path="/" component={Home} />,
  <Route path="/login" component={Login} />,
  <Route path="/signup" component={SignUp} />,
];

export default routes;
