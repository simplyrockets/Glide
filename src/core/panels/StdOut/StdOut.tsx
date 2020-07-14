import React from 'react';
import Panel, { PanelStatics } from 'core/components/Panel';

const StdOut: React.FunctionComponent<{}> & PanelStatics<{}> = () => <></>;

StdOut.panelType = 'StdOut';
StdOut.defaultConfig = {};

export default Panel<{}>(StdOut);
