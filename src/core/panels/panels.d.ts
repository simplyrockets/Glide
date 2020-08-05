import { MosaicNode } from 'react-mosaic-component';

export type PanelConfig = { [key: string]: any };

export type SaveConfig<Config> = (Config) => void;

export type ConfigsPayload = {
  id: string;
  override?: boolean;
  config: PanelConfig;
  defaultConfig?: PanelConfig;
};

export type SaveConfigsPayload = {
  silent?: boolean;
  configs: ConfigsPayload[];
};

export type ChangePanelLayoutPayload = {
  layout: MosaicNode;
};
