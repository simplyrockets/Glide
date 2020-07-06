import React from 'react';

interface IProps {

}

class PanelList extends React.Component<IProps, { searchQuery: string; }> {
  static getComponentForType(type: string): any | void {
    const panelsByCategory = getPanelsByCategory();
    const allPanels = flatten(Object.keys(panelsByCategory).map((category) => panelsByCategory[category]));

    const panel = allPanels.find((item: any) => item.component.panelType === type);
    return panel && panel.component;
  }
}