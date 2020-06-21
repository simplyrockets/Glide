import React from "react";
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ConnectionManager } from "../ConnectionManager";

export const Telemetry = () => (
  <>
    <NonIdealState
      icon={IconNames.ISSUE}
      title="Not connected to launch pad"
      description="Please establish connection first."
      action={
        <>
          <ConnectionManager onSave={(endpoint) => {}} />
        </>
      }
    />
  </>
);
