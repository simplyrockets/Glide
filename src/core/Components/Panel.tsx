import React, { ComponentType, useMemo, FunctionComponent } from 'react';
import { SaveConfig } from 'core/panels/panels';
import Flex from './Flex';

export interface PanelStatics<Config> {
  panelType: string;
  defaultConfig: Config;
}

type Props<Config> = {
  config?: Config,
  saveConfig?: (config: Config) => void,
};

export type PanelId = string;

export default function Panel<Config>(
  PanelComponent: (
    | ComponentType<{}>
    | ComponentType<{
      config?: Config,
      saveConfig?: SaveConfig<Config>,
    }>
    | FunctionComponent<{}>
    | FunctionComponent<{
        config?: Config,
        saveConfig?: SaveConfig<Config>,
      }>
  ) &
  PanelStatics<Config>
): ComponentType<Props<Config>> {
  function ConnectedPanel(props: Props<Config>) {

    const { config: originalConfig, saveConfig } = props;

    const config = originalConfig || {};
    const panelComponentConfig = useMemo(() => ({ ...PanelComponent.defaultConfig, ...config }), [config]);

    return (
      <Flex>
        <PanelComponent
          config={panelComponentConfig}
          // saveConfig={saveCompleteConfig}
        />
      </Flex>
    );
  }
  ConnectedPanel.displayName = `Panel(${PanelComponent.displayName || PanelComponent.name || ""})`;

  const MemoizedConnectedPanel = React.memo(ConnectedPanel);
  return MemoizedConnectedPanel;
};