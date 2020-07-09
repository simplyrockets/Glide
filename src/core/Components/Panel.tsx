import React, { ComponentType, useMemo } from "react";
import { SaveConfig } from "core/panels/panels";
import Flex from "./Flex";

export interface PanelStatics<Config> {
  panelType: string;
  defaultConfig: Config;
}

type Props<Config> = {
  config?: Config;
  saveConfig?: (config: Config) => void;
};

export type PanelComponentType<Config> = (
  | ComponentType<{}>
  | ComponentType<{
      config?: Config;
      saveConfig?: SaveConfig<Config>;
    }>
) &
  PanelStatics<Config>;

export type PanelId = string;

export default function Panel<Config>(
  PanelComponent: PanelComponentType<Config>
): ComponentType<Props<Config>> {
  function ConnectedPanel(props: Props<Config>) {
    const { config: originalConfig } = props;

    const config = originalConfig || {};
    const panelComponentConfig = useMemo(
      () => ({ ...PanelComponent.defaultConfig, ...config }),
      [config]
    );

    return (
      <Flex style={{ border: "2px solid transparent" }} col>
        <PanelComponent
          config={panelComponentConfig}
          // saveConfig={saveCompleteConfig}
        />
      </Flex>
    );
  }

  ConnectedPanel.displayName = `Panel(${
    PanelComponent.displayName || PanelComponent.name || ""
  })`;

  const MemoizedConnectedPanel: any = React.memo(ConnectedPanel);
  // Ensure we copy over the defaultConfig and panelType props from the PanelComponent.
  // We need these in the WindowManager
  MemoizedConnectedPanel.defaultConfig = PanelComponent.defaultConfig;
  MemoizedConnectedPanel.panelType = PanelComponent.panelType;

  return MemoizedConnectedPanel;
}
