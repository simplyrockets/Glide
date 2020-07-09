import React from 'react';
import { NonIdealState } from '@blueprintjs/core';
import glide from './Icons/glide.svg';

export default function EmptyWindow() {
  return (
    <>
      <NonIdealState
        icon={<img src={glide} width={36} alt="Glide" />}
        title="Glide"
        description="Visualization and analysis toolkit for realtime sensory and telemetry data"
      />
    </>
  );
}
