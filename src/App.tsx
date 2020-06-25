import React from "react";
import "react-mosaic-component/react-mosaic-component.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "Home";

export default function App() {
  return <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Switch>
    </Router>
  </>;
}
