import { useContext, useEffect, useState } from 'react';

import { colors, getClassNames } from 'shared';

import { gsap } from 'gsap/dist/gsap';

import { AnimateStartContext } from 'shared/context';
import { StyledLoader } from './styles';

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  const { setIsAnimationFinished } = useContext(AnimateStartContext);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    gsap?.to('.loader__container__circle', {
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
    });
    gsap?.to('.circle-left', {
      delay: 1,
      transformOrigin: 'right',
      duration: 1.5,
      transform: 'scale(10) translateX(-100px)',
      ease: 'power3.inOut',
      opacity: 0.2,
    });
    gsap?.to('.circle-right', {
      delay: 1,
      transformOrigin: 'left',
      duration: 1.5,
      transform: 'scale(10) translateX(100px)',
      ease: 'power3.inOut',
      opacity: 0.2,
    });
    setTimeout(() => {
      setIsAnimationFinished(true);
    }, [2000]);
  }, [setIsAnimationFinished]);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1400);
  }, []);

  return (
    <StyledLoader
      className={getClassNames('loader', isVisible ? '' : 'hidden')}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: colors.dark,
        zIndex: '9999',
        overflow: 'hidden',
        transition: 'opacity 900ms cubic-bezier(.445, .05, .55, .95)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="loader__container">
        <span className="loader__container__circle loader__container__circle--violet circle-left" />
        <span className="loader__container__circle circle-right" />
      </div>
    </StyledLoader>
  );
}
