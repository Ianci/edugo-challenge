import React from 'react';
// Rrd
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import LandingContainer from '../components/landing';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingContainer} />
    </Switch>
  </Router>
);

export default AppRoutes;
