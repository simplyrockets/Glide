import React from "react";
import { flatten } from "lodash";
import { panelsByCategory as pbc } from "../../panelLoader";
import { PanelComponentType } from "core/components/Panel";

export type PanelListItem = {
  title?: string,
  component?: PanelComponentType<any>
}

function getPanelsByCategory(): { [category: string]: PanelListItem[] } {
  return pbc();
}

export class PanelList extends React.Component<{}, { searchQuery: string }> {
  static getComponentForType(type: string): any | void {
    const panelsByCategory = getPanelsByCategory();
    const allPanels = flatten(Object.keys(panelsByCategory).map((category) => panelsByCategory[category]));

    const panel = allPanels.find((item) => item?.component?.panelType === type);
    return panel && panel.component;
  }
}
