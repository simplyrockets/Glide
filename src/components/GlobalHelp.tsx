import React, { useState } from "react";
import {
  Dialog,
  Button,
  Classes,
  Tooltip,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export interface IGlobalHelpState {
  autoFocus: true,
  canEscapeKeyClose: true,
  canOutsideClickClose: true,
  enforceFocus: true,
  isOpen: false,
  usePortal: true,
}

// @HotkeysTarget
export default function GlobalHelp() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return <>
    <Tooltip content="Help">
      <Button icon={IconNames.HELP} minimal title="Help" onClick={() => setIsOpen(!isOpen)} />
    </Tooltip>

    <Dialog icon={IconNames.HELP} title="Help" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className={Classes.DIALOG_BODY}>
        <p>hello there</p>
      </div>
      <div className={Classes.DIALOG_FOOTER}>
        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
          <Button onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </div>
    </Dialog>
  </>
}
