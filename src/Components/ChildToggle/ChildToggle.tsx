import React, { useRef } from 'react';
import Flex from 'core/components/Flex';
import { createPortal } from 'react-dom';
// import styles from './ChildToggle.module.scss';
// import Flex from 'core/components/Flex';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  children: [React.ReactElement<any>, React.ReactElement<any>];
  style?: Object;
  position: 'above' | 'below' | 'left' | 'right';
  noPortal?: boolean;
};

const ChildToggle = ({
  isOpen,
  onToggle,
  children,
  style,
  position,
  noPortal
}: Props) => {
  function renderFloating() {
    if (!isOpen) {
      return;
    }
    const el = useRef();
    // position menu relative to our children[0]
    const childEl = el.firstElementChild.firstElementChild;
    const childRect = childEl.getBoundingClientRect();
    const padding = 10;
    const styleObj = {
      ...style,
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      height: 0
    };

    let spacerSize;
    if (position === 'left') {
      styleObj.top = childRect.top;
      spacerSize = window.innerWidth - childRect.left - padding;
    } else if (position === 'below') {
      styleObj.top = childRect.top + childRect.height;
      spacerSize = childRect.left - padding;
    } else if (position === 'above') {
      delete styleObj.bottom;
      styleObj.height = childRect.top - padding;
      spacerSize = childRect.left - padding;
    } else {
      styleObj.top = childRect.top;
      spacerSize = childRect.left + childRect.width - padding;
    }

    if (!document.body) {
      return null;
    }

    const tree = (
      <div ref={(el) => (floatingEl = el)}>
        <Flex
          row
          reverse={position === 'left'}
          start={position !== 'above'}
          end={position === 'above'}
          style={styleObj}
        >
          {/* shrinkable spacer allows child to have a default position but slide over when it would go offscreen */}
          <span style={{ flexBasis: spacerSize, flexShrink: 1 }} />
          {children[1]}
        </Flex>
      </div>
    );

    return noPortal ? tree : createPortal(tree, document.body);
  }

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <div
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          onToggle();
        }}
      >
        {children[0]}
      </div>
      {renderFloating()}
    </div>
  );
};

export default ChildToggle;
