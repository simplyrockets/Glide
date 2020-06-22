import React from "react";
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import ConnectionManager from "../ConnectionManager";
import { Mosaic } from "react-mosaic-component";

export default function Telemetry() {
  const ELEMENT_MAP: { [viewId: string]: JSX.Element } = {
    a: <div>Left Window</div>,
    b: <div>Top Right Window</div>,
    c: <div>Bottom Right Window</div>,
  };

  return (
    <>
      <NonIdealState
        icon={IconNames.ISSUE}
        title="Not connected to launch pad"
        description="Please establish connection first."
        action={<ConnectionManager onSave={(endpoint) => {}} />}
      />

      <Mosaic<string>
        renderTile={(id) => ELEMENT_MAP[id]}
        initialValue={{
          direction: "row",
          first: "a",
          second: {
            direction: "column",
            first: "b",
            second: "c",
          },
          splitPercentage: 40,
        }}
      />
    </>
  );
}
