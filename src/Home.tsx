import React from 'react';
import { RecoilRoot } from 'recoil';

import Navigation from 'Navigation';
import PanelLayout from 'PanelLayout';
import Timeline from 'Timeline';

import styles from 'Home.module.scss';

export default function Home() {
  return (
    <RecoilRoot>
      <Navigation />
      <div className={styles.layout}>
        <PanelLayout />
      </div>
      <Timeline />
    </RecoilRoot>
  );
}
