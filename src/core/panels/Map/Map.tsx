import React, { useState } from 'react';
import Flex from 'core/components/Flex';
import Panel, { PanelComponentType } from 'core/components/Panel';

import ReactMapGL from 'react-map-gl';

type Config = {};

type Props = {
  config: any;
  saveConfig: any;
};

const Map: PanelComponentType<Config> = ({ config, saveConfig }: Props) => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <Flex col style={{ height: '100%' }}>
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESSKEY}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </Flex>
  );
};
Map.panelType = 'Map';
Map.defaultConfig = {
  lat: 0,
  lng: 0
};
Map.displayName = 'Map';

export default Panel<Config>(Map);
