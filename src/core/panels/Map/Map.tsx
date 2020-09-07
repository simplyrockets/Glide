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
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <Flex col style={{ height: '100%' }}>
      <ReactMapGL
        width="100%"
        height="100%"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESSKEY}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        reuseMaps
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
