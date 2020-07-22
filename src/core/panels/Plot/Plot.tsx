import React from 'react';
import Panel, { PanelComponentType } from 'core/components/Panel';
import { SaveConfig } from '../panels';

type Props = {
  config?: Config;
  saveConfig?: SaveConfig<Config>;
};
type Config = {};

const Plot: PanelComponentType<Config> = ({ config, saveConfig }: Props) => {
  return <>Plot goes here...</>;
};
Plot.panelType = 'Plot';
Plot.defaultConfig = {};

export default Panel<Config>(Plot);
