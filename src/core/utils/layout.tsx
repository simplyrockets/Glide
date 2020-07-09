import { PanelId } from 'core/components/Panel';

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
