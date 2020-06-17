import React from "react";
import {
  Alignment,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  AnchorButton
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export interface NavigationProps {}

export class Navigation extends React.PureComponent<NavigationProps> {
  public render() {
    return <>
      <Navbar className={Classes.DARK}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <AnchorButton href="/" className="bp3-minimal" icon={IconNames.HOME} text="Glide"  />
          </NavbarHeading>
          <NavbarDivider />
          <AnchorButton href="/launchpad" className="bp3-minimal" icon={IconNames.LAYER} text="Launch Pad"  />
          <AnchorButton href="/rocket" className="bp3-minimal" icon={IconNames.AIRPLANE} text="Rocket" />
        </NavbarGroup>
      </Navbar>
    </>
  }
}
