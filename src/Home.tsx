import React from 'react';
import { RecoilRoot } from 'recoil';

import Navigation from 'Navigation';
import PanelLayout from 'PanelLayout';
import Timeline from 'Timeline';

export default function Home() {
  return (
    <RecoilRoot>
      <Navigation />
      <PanelLayout />
      <Timeline />
    </RecoilRoot>
  );
}
