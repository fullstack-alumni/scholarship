import React from 'react';
import { Route } from 'react-router-dom';

import Home from 'containers/home';
import Login from 'components/login';
import SignUp from 'components/sign_up';
import Apply from 'components/apply';

const routes = [
  <Route exact path="/" component={Home} />,
  <Route path="/login" component={Login} />,
  <Route path="/signup" component={SignUp} />,
  <Route path="/apply" component={Apply} />
];

export default routes;
