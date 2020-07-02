import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Mosaic, MosaicWindow, MosaicZeroState } from "react-mosaic-component";
import { NonIdealState, Classes } from "@blueprintjs/core";
import ConnectionManager from "ConnectionManager";
import { PanelId } from 'core/Components/Panel';

export default function RootLayout() {

  const TITLE_MAP: Record<PanelId, string> = {
    0: 'left window',
    1: 'Top Right Window',
    2: 'Bottom Right Window',
    3: 'New Window'
  };
  let windowCount: number = 3;

  const createNode = () => { return windowCount++; }

  return <>
    {false ?
    <NonIdealState
      icon={IconNames.ISSUE}
      title="Not connected to Glide Relay"
      action={<ConnectionManager onSave={(endpoint) => {}} />}
    />
      :
    <div style={{ height: '100%' }}>
      <Mosaic<PanelId>
        renderTile={(id, path) => (
          <MosaicWindow<PanelId> path={path} createNode={createNode} title={TITLE_MAP[id]}>
            <h1>{id}: {path}</h1>
          </MosaicWindow>
        )}
        zeroStateView={<MosaicZeroState createNode={createNode} />}
        initialValue={{
          direction: "row",
          first: 0,
          second: {
            direction: 'column',
            first: 1,
            second: 2,
          },
          splitPercentage: 40,
        }}
        className="mosaic-blueprint-theme bp3-dark"
      />
    </div>
    }
  </>
}
