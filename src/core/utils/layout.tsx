import { PanelId } from 'core/components/Panel';
import { MosaicNode } from 'react-mosaic-component';
import {
  PanelConfig,
  SaveConfigsPayload,
  ChangePanelLayoutPayload
} from 'core/panels/panels';
import { isEmpty } from 'lodash';

// given a panel type, create a unique id for a panel
// with the type embedded within the id.
export function getPanelIdForType(type: string): PanelId {
  const factor = 1e10;
  const rnd = Math.round(Math.random() * factor).toString(36);
  // a panel id consists of it's type, an exclamation mark for splitting and a random val
  // because each PanelId functions as the react 'key' for the react-mosaic-component layout
  // but also must encode the panel type for factory construction.
  return `${type}!${rnd}`;
}

export function getPanelTypeFromId(id: PanelId): string {
  return id.split('!')[0];
}

export const getSaveConfigsPayloadForAddedPanel = ({
  id,
  config
}: {
  id: string;
  config: PanelConfig;
}): SaveConfigsPayload => {
  return { configs: [{ id, config }] };
};

export const selectPanelOutput = (
  type: string,
  layout: MosaicNode<string>,
  {
    config
  }: {
    config?: PanelConfig;
  }
): {
  saveConfigsPayload: SaveConfigsPayload;
  changePanelPayload: ChangePanelLayoutPayload;
} => {
  const id = getPanelIdForType(type);
  let saveConfigsPayload: SaveConfigsPayload = { configs: [] };
  if (config) {
    saveConfigsPayload = { configs: [{ id, config }] };
  }
  const changePanelPayload = {
    layout: isEmpty(layout)
      ? id
      : { direction: 'row', first: id, second: layout }
  };
  return { saveConfigsPayload, changePanelPayload };
};
