import { atom } from 'recoil';
import { MosaicNode } from 'react-mosaic-component';

export const layoutState = atom<MosaicNode<string>>({
  key: 'layout',
  default: ''
});
