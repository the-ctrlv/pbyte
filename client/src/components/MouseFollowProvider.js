import { useEffect, useRef, useState } from 'react';
import ReactHoverObserver from 'react-hover-observer';

import { getClassNames, useMousePosition, useWindowResize } from 'shared';

export default function MouseFollowProvider({
  children,
  theme,
  isContactPage,
}) {
  const hoverTarget = useRef(null);

  const [isMouseHover, setIsMouseHover] = useState(false);
  const { currentX, currentY } = useMousePosition(isMouseHover, hoverTarget);
  const [randomMousePosition, setRandomMousePosition] = useState({
    randomX: null,
    randomY: null,
  });
  const { width } = useWindowResize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(width < 700);
  }, [width]);

  useEffect(() => {
    if (!isMouseHover) {
      setRandomMousePosition({
        randomX: hoverTarget.current.clientWidth * Math.random(),
        randomY: hoverTarget.current.clientHeight * Math.random(),
      });
    }
  }, [isMouseHover]);

  return (
    <ReactHoverObserver
      onMouseLeave={() => setIsMouseHover(false)}
      onMouseOver={() => setIsMouseHover(true)}
      className="react-hover-observer"
    >
      <div
        ref={hoverTarget}
        className={getClassNames(
          'mouse-follow',
          theme === 'light' ? 'mouse-follow--light' : '',
          `${theme}`
        )}
      >
        {children}

        {!isMobile && !isContactPage && (
          <div className="mouse-follow__wrapper">
            <div className="mouse-follow__circle mouse-follow__circle--wrapper">
              <div
                className="
                  mouse-follow__circle"
                style={{
                  // eslint-disable-next-line prettier/prettier
                  transform: `translate(${`${
                    isMouseHover ? currentX : randomMousePosition.randomX
                  }px`}, ${`${
                    isMouseHover ? currentY : randomMousePosition.randomY
                  }px`})`,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </ReactHoverObserver>
  );
}
