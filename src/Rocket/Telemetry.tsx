import React from 'react';
import { NonIdealState, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export const Telemetry = () => <>
  <NonIdealState
      icon={IconNames.ISSUE}
      title="Not connected to rocket"
      description="Please establish connection first."
      action={<>
        <Button text="Connect" intent="primary" large rightIcon={IconNames.CELL_TOWER} />
      </>}
  />
</>;
