import React, { useState } from 'react';
import {
  FormGroup,
  InputGroup,
  Dialog,
  Classes,
  Button,
  AnchorButton,
  Intent
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

export interface IProps {
  endpoint?: string;
  onSave: (endpoint: string) => void;
}

export default function ConnectionManager(props: IProps) {
  const [endpoint, setEndpoint] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function save() {
    console.log('endpoint: ', endpoint);
    props.onSave(endpoint);
  }

  return (
    <>
      <Button
        text="Connect"
        intent="primary"
        large
        rightIcon={IconNames.CELL_TOWER}
        onClick={() => setIsOpen(true)}
      />
      <Dialog
        icon={IconNames.CELL_TOWER}
        title="Connection Manager"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={Classes.DIALOG_BODY}>
          <FormGroup
            helperText=""
            label="Glide Relay Endpoint"
            labelFor="text-input"
            labelInfo="(required)"
          >
            <InputGroup
              id="endpoint"
              placeholder="ws://server:3000/relay"
              value={endpoint}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEndpoint(e.target.value)
              }
            />
          </FormGroup>
        </div>
        <div className={Classes.DIALOG_FOOTER}>
          <div className={Classes.DIALOG_FOOTER_ACTIONS}>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <AnchorButton intent={Intent.PRIMARY} onClick={() => save()}>
              Save
            </AnchorButton>
          </div>
        </div>
      </Dialog>
    </>
  );
}
