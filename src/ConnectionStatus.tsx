import React from 'react';
import {
  Popover,
  Button,
  PopoverInteractionKind,
  PopoverPosition
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export class ConnectionState {
  connected: boolean = false;
}

export default function ConnectionStatus(props: ConnectionState) {
  return (
    <>
      {props.connected ? (
        <>
          <Popover
            interactionKind={PopoverInteractionKind.CLICK}
            position={PopoverPosition.BOTTOM_RIGHT}
          >
            <Button
              icon={IconNames.FEED}
              minimal
              intent="success"
              title="Connected"
            />
            <div>
              <h5>Connected.</h5>
              <p>You are currently connected to the launch pad.</p>
            </div>
          </Popover>
        </>
      ) : (
        <Button
          icon={IconNames.ISSUE}
          title="No connection"
          intent="warning"
          minimal
        />
      )}
    </>
  );
}
