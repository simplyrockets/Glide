import React from 'react';
import './App.css';
import { Navigation } from './Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { LaunchPad } from './launchpad/LaunchPad';
import { Rocket } from './rocket/Rocket';

export const App = () => (
  <Router>
    <main>
      <nav>
        <Navigation />
      </nav>
    </main>

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/launchpad" component={LaunchPad} />
      <Route path="/rocket" component={Rocket} />
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  </Router>
);
