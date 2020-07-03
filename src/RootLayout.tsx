import React, { useCallback } from "react";
import { Mosaic, MosaicWindow, MosaicZeroState } from "react-mosaic-component";
import { getPanelTypeFromId, getPanelIdForType } from "core/utils/layout";
import Flex from "core/Components/Flex";
import PanelToolbar from "core/Components/PanelToolbar";

export default function RootLayout() {

  const createTile = useCallback(
    (config: any) => {
      const defaultPanelType = "stdout";
      const type = config?.type || defaultPanelType;
      const id = getPanelIdForType(type);
      return id;
    },
    []
  );

  const renderTile = useCallback(
    (id: string | {}, path: any): JSX.Element => {
      // `id` is usually a string. But when `layout` is empty, `id` will be an empty object, in which case we don't need to render Tile
      if (!id || typeof id !== "string") {
        return <></>;
      }
      const type = getPanelTypeFromId(id);
      // const PanelComponent = PanelList.getComponentForType(type);
      const PanelComponent: any = false;

      if (!PanelComponent) {
        // No component found for the given type, render the panel selector
        return (
          <MosaicWindow title={type} path={path} createNode={createTile} renderPreview={() => <div></div>}>
            <Flex col center>
              <PanelToolbar floating />
            </Flex>
            Unknown panel type: {type}.
          </MosaicWindow>
        );
      }

      return (
        <MosaicWindow title="" key={path} path={path} createNode={createTile}>
          <PanelComponent />
        </MosaicWindow>
      )
    },
    [createTile]
  );

  // todo change to Flex
  return <>
    <div style={{ height: '100%' }}>
      <Mosaic
        renderTile={renderTile}
        resize={{ minimumPaneSizePercentage: 2 }}
        zeroStateView={<MosaicZeroState createNode={createTile} />}
        initialValue={{
          direction: "row",
          first: "0",
          second: {
            direction: 'column',
            first: "1",
            second: "2",
          },
          splitPercentage: 40,
        }}
        className="mosaic-blueprint-theme bp3-dark"
      />
    </div>
  </>
}
