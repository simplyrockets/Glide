import React from 'react';
import { flatten } from 'lodash';
import { panelsByCategory as pbc, panelCategories } from '../../panelLoader';
import { PanelComponentType } from 'core/components/Panel';
import {
  Tooltip,
  Position,
  MenuItem,
  MenuDivider,
  Menu
} from '@blueprintjs/core';

export type PanelListItem = {
  title?: string;
  component: PanelComponentType<any>;
};

function getPanelsByCategory(): { [category: string]: PanelListItem[] } {
  const panelsByCategory: any = pbc();
  return panelsByCategory;
}

export type PanelSelection = {
  type: string;
};

type Props = {
  onPanelSelect: (selection: PanelSelection) => void;
};

export class PanelList extends React.Component<Props, { searchQuery: string }> {
  static getComponentForType(type: string): PanelComponentType<any> | void {
    const panelsByCategory = getPanelsByCategory();
    const allPanels = flatten(
      Object.keys(panelsByCategory).map(
        (category) => panelsByCategory[category]
      )
    );

    const panel = allPanels.find((item) => item?.component?.panelType === type);
    return panel && panel.component;
  }

  render() {
    const { onPanelSelect } = this.props;
    const categories = panelCategories();
    const panelsByCategory = getPanelsByCategory();

    return (
      <Menu>
        <div>
          <div style={{ position: 'sticky', top: 0 }}>
            <Tooltip content="click panel to add" position={Position.LEFT}>
              <div
                style={{ position: 'relative', pointerEvents: 'none', top: 45 }}
              />
            </Tooltip>
          </div>
          {categories.map(({ label, key }) => {
            let items = panelsByCategory[key];

            return items.map(({ title, component }, panelIdx) => {
              const panelType = component.panelType;

              return (
                <div key={`${panelType}-${panelIdx}`}>
                  {panelIdx === 0 && <MenuDivider title={label} />}
                  <MenuItem
                    text={title}
                    onClick={() => {
                      onPanelSelect({
                        type: panelType
                      });
                    }}
                  />
                </div>
              );
            });
          })}
        </div>
      </Menu>
    );
  }
}
