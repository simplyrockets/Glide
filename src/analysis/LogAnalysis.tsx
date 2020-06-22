import React from 'react';
import { NonIdealState, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export default function LogAnalysis() {
  return <>
    <NonIdealState
      icon={IconNames.CLOUD_UPLOAD}
      title="Upload the log file to analyse"
      description="Upload the log file, and analysis will happen."
      action={<Button text="Upload" intent="primary" />}
    />
  </>;
}
