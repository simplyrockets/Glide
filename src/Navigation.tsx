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
import glide from './Icons/glide.svg';
import rocket from './Icons/rocket.svg';

export interface NavigationProps {}

export class Navigation extends React.PureComponent<NavigationProps> {
  public render() {
    return <>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            <AnchorButton href="/" className="bp3-minimal" icon={<img src={glide} width={16} />} text="Glide">

              </AnchorButton>
          </NavbarHeading>
          <NavbarDivider />
          <AnchorButton href="/launchpad" className="bp3-minimal" icon={IconNames.LAYER} text="Launch Pad"  />
          <AnchorButton href="/rocket" className="bp3-minimal" icon={<img src={rocket} width={16} />} text="Rocket" />
        </NavbarGroup>
      </Navbar>
    </>
  }
}
