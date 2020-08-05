import React, { ComponentType, useMemo } from 'react';
import { SaveConfig } from 'core/panels/panels';
import Flex from './Flex';
import ErrorBoundary from 'core/components/ErrorBoundary';
import { useRecoilState, atom } from 'recoil';

export interface PanelStatics<Config> {
  panelType: string;
  defaultConfig: Config;
}

type Props<Config> = {
  childId?: string;
  config?: Config;
  saveConfig?: (config: Config) => void;
};

export type PanelComponentType<Config> =
  | (ComponentType<{}> & PanelStatics<Config>)
  | (ComponentType<{
      config?: Config;
      saveConfig?: SaveConfig<Config>;
      isHovered?: boolean;
    }> &
      PanelStatics<Config>);

export type PanelId = string;
export type PT<Config> = ComponentType<Props<Config>>;

export default function Panel<Config>(
  PanelComponent: PanelComponentType<Config>
): ComponentType<Props<Config>> {
  function ConnectedPanel({
    childId,
    config: originalConfig,
    saveConfig
  }: Props<Config>) {
    const hoveredState = atom<boolean>({
      key: `${childId}-hovered`,
      default: false
    });

    const selectedState = atom<boolean>({
      key: `${childId}-selected`,
      default: false
    });

    const [isHovered, setIsHovered] = useRecoilState<boolean>(hoveredState);
    const [isSelected] = useRecoilState<boolean>(selectedState);

    const config = originalConfig || {};
    const panelComponentConfig = useMemo(
      () => ({ ...PanelComponent.defaultConfig, ...config }),
      [config]
    );

    // Key bindings
    const { onMouseEnter, onMouseLeave, onMouseMove } = useMemo(
      () => ({
        onMouseEnter: () => {
          console.log('setting hovered to true');
          setIsHovered(true);
        },
        onMouseLeave: () => setIsHovered(false),
        onMouseMove: (e: any) => {
          // if (e.metakey !== cmdkeypressed) {
          //   setcmdkeypressed(e.metakey);
          // }
        }
        // enterfullscreen: () => {
        //   setfullscreen(true);
        //   setFullScreenLocked(true);
        // },
        // exitFullScreen: () => {
        //   setFullScreen(false);
        //   setFullScreenLocked(false);
        // },
      }),
      [setIsHovered]
    );

    return (
      <Flex
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
        style={{
          border: `2px solid ${isSelected ? '#248eff' : 'transparent'}`
        }}
        col
      >
        <ErrorBoundary>
          <PanelComponent
            config={panelComponentConfig}
            saveConfig={saveConfig}
            isHovered={isHovered}
          />
        </ErrorBoundary>
      </Flex>
    );
  }

  ConnectedPanel.displayName = `Panel(${
    PanelComponent.displayName || PanelComponent.name || ''
  })`;

  const MemoizedConnectedPanel = React.memo(ConnectedPanel);
  // Ensure we copy over the defaultConfig and panelType props from the PanelComponent.
  // We need these in the WindowManager
  // @ts-ignore - doesn't know underlying memoized PanelComponent's type
  MemoizedConnectedPanel.defaultConfig = PanelComponent.defaultConfig;
  // @ts-ignore - doesn't know underlying memoized PanelComponent's type
  MemoizedConnectedPanel.panelType = PanelComponent.panelType;

  return MemoizedConnectedPanel;
}
