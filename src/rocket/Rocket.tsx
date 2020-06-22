import React from 'react';
import { AnchorButton, Navbar, NavbarGroup } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Telemetry from "./Telemetry";

export default function Rocket() {
  let { path, url } = useRouteMatch();

  return (
    <>
      <Router>
        <Navbar>
          <NavbarGroup>
            <AnchorButton
              href={`${url}/telemetry`}
              minimal
              icon={IconNames.PULSE}
              text="Telemetry"
            />
          </NavbarGroup>
        </Navbar>

        <Switch>
          <Route path={path} exact component={Telemetry} />
          <Route path={`${path}/telemetry`} component={Telemetry} />
        </Switch>
      </Router>
    </>
  );
}
