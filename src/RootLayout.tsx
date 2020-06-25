import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Mosaic, MosaicWindow, MosaicZeroState } from "react-mosaic-component";
import { NonIdealState } from "@blueprintjs/core";
import ConnectionManager from "ConnectionManager";

export type ViewId = 'a' | 'b' | 'c' | 'new';

export default function RootLayout() {

  const TITLE_MAP: Record<ViewId, string> = {
    a: 'Left Window',
    b: 'Top Right Window',
    c: 'Bottom Right Window',
    new: 'New Window'
  };

  const createNode = () => { return 0; }

  return <>
    {false ?
    <NonIdealState
      icon={IconNames.ISSUE}
      title="Not connected to Glide Relay"
      action={<ConnectionManager onSave={(endpoint) => {}} />}
    />
      :
    <div style={{ height: '100%' }}>
      <Mosaic<ViewId>
        renderTile={(id, path) => (
          <MosaicWindow<ViewId> path={path} createNode={() => 'new'} title={TITLE_MAP[id]}>
            <h1>{TITLE_MAP[id]}</h1>
          </MosaicWindow>
        )}
        zeroStateView={<MosaicZeroState children={<></>} createNode={createNode} />}
        initialValue={{
          direction: "row",
          first: 'a',
          second: {
            direction: 'column',
            first: 'b',
            second: 'c',
          },
          splitPercentage: 40,
        }}
      />
    </div>
    }
  </>
}
