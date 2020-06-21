import React from "react";
import {
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  AnchorButton
} from "@blueprintjs/core";
import glide from './Icons/glide.svg';
import rocket from './Icons/rocket.svg';
import launchpad from './Icons/launchpad.svg';
import { IconNames } from "@blueprintjs/icons";

export interface NavigationProps {}

export class Navigation extends React.PureComponent<NavigationProps> {
  public render() {
    return <>
      <Navbar className={Classes.DARK}>
        <NavbarGroup>
          <NavbarHeading>
            <AnchorButton href="/" minimal icon={<img src={glide} width={16} alt="Glide" />} text="Glide" />
          </NavbarHeading>
          <NavbarDivider />
          <AnchorButton href="/launchpad" minimal icon={<img src={launchpad} width={16} alt="Launch Pad" />} text="Launch Pad"  />
          <AnchorButton href="/rocket" minimal icon={<img src={rocket} width={16} alt="Rocket" />} text="Rocket" />
          <NavbarDivider />
          <AnchorButton href="/log-analysis" minimal icon={IconNames.OFFLINE} text="Log Analysis" />
        </NavbarGroup>
      </Navbar>
    </>
  }
}
