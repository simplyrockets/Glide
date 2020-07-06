import React, { useCallback } from "react";
import Flex from "core/components/Flex";
import PanelToolbar from "core/components/PanelToolbar";

import styled from "styled-components";
import helpContent from "./Note.help.md";
import Panel from "core/components/Panel";
import { SaveConfig } from "../panels";

const STextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  margin: 0;
  padding: 4px 6px;
  &:focus {
    background: rgba(255, 255, 255, 0.1);
  }
`;

type Config = { noteText: string };
interface IProps {
  config: Config;
  saveConfig: SaveConfig<Config>;
}

export function Note({ config, saveConfig }: IProps): React.FC<IProps> {
  const onChanged = useCallback(
    (event: any) => {
      saveConfig({ noteText: event.target.value });
    },
    [saveConfig]
  );

  return (
    <Flex col style={{ height: "100%" }}>
      <PanelToolbar helpContent={helpContent} floating />
      <STextArea
        placeholder="Enter your notes here"
        value={config.noteText}
        onChange={onChanged}
      />
    </Flex>
  );
}
Note.panelType = "Note";
Note.defaultConfig = { noteText: "" };

export default Panel<Config>(Note);
