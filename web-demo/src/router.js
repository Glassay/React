import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BasicLayout from './layout/BasicLayout';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
