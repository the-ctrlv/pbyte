import { createContext } from 'react';

export const DeviceModeContext = createContext({
  isMobileMode: false,
  isTabletMode: false,
});

export const AnimateStartContext = createContext({
  isAnimationFinished: false,
  // eslint-disable-next-line prettier/prettier
  setIsAnimationFinished: () => { },
});
