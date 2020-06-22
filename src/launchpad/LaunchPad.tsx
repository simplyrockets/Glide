import React from "react";
import {
  Navbar,
  NavbarGroup,
  Alignment,
  AnchorButton,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Telemetry from "./Telemetry";
import ConnectionStatus from "../ConnectionStatus";

export default function LaunchPad() {
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
          <NavbarGroup align={Alignment.RIGHT}>
            <ConnectionStatus connected={true} />
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
