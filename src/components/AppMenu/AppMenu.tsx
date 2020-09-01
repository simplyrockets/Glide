import React, { useState, useCallback } from 'react';
import ChildToggle from 'components/ChildToggle/ChildToggle';
import { Menu, AnchorButton } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import PanelList, { PanelSelection } from 'core/panels/PanelList/PanelList';
import { layoutState } from 'core/layout/layout.state';
import { selectPanelOutput } from 'core/utils/layout';
import { useRecoilState } from 'recoil';

type Props = {
  defaultIsOpen?: boolean;
};

const AppMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(props.defaultIsOpen || false);
  const onToggle = useCallback(() => setIsOpen((open) => !open), []);

  const [layout, setLayout] = useRecoilState(layoutState);

  const onPanelSelect = useCallback(
    ({ type, config }: PanelSelection) => {
      console.log('panel selected: ', type);

      const { changePanelPayload } = selectPanelOutput(type, layout, {
        config
      });
      setLayout(changePanelPayload.layout);
    },
    [layout, setLayout]
  );

  return (
    <ChildToggle position="below" onToggle={onToggle} isOpen={isOpen}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AnchorButton icon={IconNames.ADD} minimal />
      </div>
      <Menu>
        <PanelList onPanelSelect={onPanelSelect} />
      </Menu>
    </ChildToggle>
  );
};

export default AppMenu;
