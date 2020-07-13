import React, { useState, useCallback } from 'react';
import ChildToggle from 'components/ChildToggle/ChildToggle';
import { Menu, AnchorButton } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { PanelList } from 'core/panels/PanelList/PanelList';

type Props = {
  defaultIsOpen?: boolean;
};

const AppMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.defaultIsOpen || false);
  const onToggle = useCallback(() => setIsOpen((open) => !open), []);

  return (
    <ChildToggle position="below" onToggle={onToggle} isOpen={isOpen}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AnchorButton icon={IconNames.ADD} minimal />
      </div>
      <Menu>
        <PanelList />
      </Menu>
    </ChildToggle>
  );
};

export default AppMenu;
