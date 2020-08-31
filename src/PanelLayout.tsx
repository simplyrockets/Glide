import React, { useCallback } from 'react';
import {
  Mosaic,
  MosaicWindow,
  MosaicZeroState,
  MosaicBranch,
  MosaicNode
} from 'react-mosaic-component';
import { getPanelTypeFromId, getPanelIdForType } from 'core/utils/layout';
import Flex from 'core/components/Flex';
import PanelToolbar from 'core/components/PanelToolbar';
import ErrorBoundary from 'core/components/ErrorBoundary';
import PanelList from 'core/panels/PanelList/PanelList';

import 'react-mosaic-component/react-mosaic-component.css';
import './PanelLayout.scss';
import { layoutState } from 'core/layout/layout.state';
import { useRecoilState } from 'recoil';

const EMPTY_CONFIG = Object.freeze({});

export default function PanelLayout() {
  const createTile = useCallback((config: any) => {
    const defaultPanelType = 'Note';
    const type = config?.type || defaultPanelType;
    const id = getPanelIdForType(type);
    return id;
  }, []);

  const [layout, setLayout] = useRecoilState(layoutState);

  const renderTile = useCallback(
    (id: string | {}, path: MosaicBranch[]): JSX.Element => {
      // `id` is usually a string. But when `layout` is empty, `id` will be an empty object, in which case we don't need to render Tile
      if (!id || typeof id !== 'string') {
        return <></>;
      }
      const type = getPanelTypeFromId(id);
      const PanelComponent = PanelList.getComponentForType(type);

      if (!PanelComponent) {
        // No component found for the given type, render the panel selector
        return (
          <MosaicWindow
            title={type}
            path={path}
            createNode={createTile}
            // renderToolbar={() => <div></div>}
            renderPreview={(p) => <div>{p.title}</div>}
          >
            <Flex col center>
              <PanelToolbar floating />
            </Flex>
            Unknown panel type: {type}.
          </MosaicWindow>
        );
      }

      return (
        <MosaicWindow
          title={PanelComponent?.displayName ?? 'custom component'}
          key={path.toString()}
          path={path}
          createNode={createTile}
          renderPreview={() => <div></div>}
        >
          <PanelComponent saveConfig={(c: any) => {}} config={EMPTY_CONFIG} />
        </MosaicWindow>
      );
    },
    [createTile]
  );

  const onChange = useCallback(
    (newLayout: string | MosaicNode<string> | null) => {
      if (newLayout !== null) {
        console.log('writing new layout to recoil state');
        setLayout(newLayout);
      }
    },
    [setLayout]
  );

  // todo change to Flex
  return (
    <ErrorBoundary>
      <Flex center style={{ width: '100%', height: '100%' }}>
        <Mosaic //WithoutDragDropContext
          renderTile={renderTile}
          resize={{ minimumPaneSizePercentage: 2 }}
          zeroStateView={<MosaicZeroState createNode={createTile} />}
          value={layout}
          initialValue={null}
          onChange={onChange}
          // initialValue={{
          //   direction: 'row',
          //   first: 'Note!0',
          //   second: {
          //     direction: 'column',
          //     first: 'Note!1',
          //     second: 'Note!2'
          //   },
          //   splitPercentage: 40
          // }}
          className="mosaic-blueprint-theme bp3-dark"
        />
      </Flex>
    </ErrorBoundary>
  );
}
