import React, { useCallback } from 'react';
import Flex from 'core/components/Flex';
import PanelToolbar from 'core/components/PanelToolbar';

import styled from 'styled-components';
import helpContent from './Note.help.md';
import Panel, { PanelComponentType } from 'core/components/Panel';
import { SaveConfig } from '../panels';

const STextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  margin: 0;
  padding: 4px 6px;
  &:focus {
    background: rgba(255, 255, 255, 0.01);
  }
`;

type Config = { noteText: string };
type Props = {
  config: Config;
  saveConfig: SaveConfig<Config>;
};

const Note: PanelComponentType<Config> = ({ config, saveConfig }: Props) => {
  const onChanged = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      saveConfig({ noteText: event.target.value });
    },
    [saveConfig]
  );

  return (
    <Flex col style={{ height: '100%' }}>
      <PanelToolbar helpContent={helpContent} floating />
      <STextArea
        placeholder="Enter your notes here"
        value={config.noteText ?? ''}
        onChange={onChanged}
      />
    </Flex>
  );
};
Note.panelType = 'Note';
Note.defaultConfig = { noteText: '' };

export default Panel<Config>(Note);
