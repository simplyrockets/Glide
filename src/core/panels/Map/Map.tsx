import React from 'react';
import Flex from 'core/components/Flex';
import Panel, { PanelComponentType } from 'core/components/Panel';

type Config = {};

type Props = {
  config: any;
  saveConfig: any;
};

const Map: PanelComponentType<Config> = ({ config, saveConfig }: Props) => {
  return (
    <Flex col style={{ height: '100%' }}>
      map goes here..
    </Flex>
  );
};
Map.panelType = 'Map';
Map.defaultConfig = {
  lat: 0,
  lng: 0
};

export default Panel<Config>(Map);