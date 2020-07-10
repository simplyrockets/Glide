import React from 'react';
import { Classes, Navbar, AnchorButton, Alignment } from '@blueprintjs/core';
import glide from './Icons/glide.svg';
import { IconNames } from '@blueprintjs/icons';
import GlobalHelp from 'components/GlobalHelp';
import SpinningLoadingIcon from 'core/components/SpinningLoadingIcon';
import AppMenu from 'components/AppMenu/AppMenu';

export default function Navigation() {
  return (
    <>
      <Navbar className={Classes.DARK}>
        <Navbar.Group>
          <Navbar.Heading>
            <AnchorButton
              href="/"
              minimal
              icon={<img src={glide} width={16} alt="Glide" />}
              text="Glide"
            />
          </Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>

        <Navbar.Group align={Alignment.RIGHT}>
          <GlobalHelp />
          <AppMenu />
          <AnchorButton icon={IconNames.LAYOUT_GRID} minimal />
          <AnchorButton icon={IconNames.OFFLINE} minimal />
          <SpinningLoadingIcon />
        </Navbar.Group>
      </Navbar>
    </>
  );
}
