/* eslint-disable array-callback-return */
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap';

import { useContext, useEffect } from 'react';

import { getClassNames } from 'shared';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import { AnimateStartContext } from 'shared/context';

import { StyledHero } from './styles';

export default function HeroContentWrapper({
  children,
  theme,
  isSubtitleRight,
  isEllipseAbsent,
}) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.easeIn' } });
  const { isAnimationFinished } = useContext(AnimateStartContext);
  useEffect(() => {
    if (tl && !isEllipseAbsent && isAnimationFinished) {
      tl.to(
        '.hero__ellipse--left',
        {
          x: '-50%',
          duration: 0.7,
          delay: 0.3,
          onComplete: () => {
            gsap.to('.hero__ellipse--left', { x: '-80%', delay: 0.3 });
          },
        },
        0
      );
      tl.to(
        '.hero__ellipse--right',
        {
          x: '-50%',
          duration: 0.7,
          delay: 0.3,
          onComplete: () => {
            gsap.to('.hero__ellipse--right', { x: '-20%', delay: 0.3 });
          },
        },
        0
      );
    }
    if (tl && isAnimationFinished) {
      tl.to('.hero__title', { y: '0%', opacity: 1, duration: 0.5, delay: 0.5 });
      tl.to('.subtitle-animated', { y: '0%', opacity: 1, duration: 0.5 });
      tl.to('.hero__footer', { y: '0%', opacity: 1, duration: 0.5 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimationFinished]);

  SwiperCore.use([Autoplay]);

  return (
    <StyledHero
      className={getClassNames(
        `section-${theme}`,
        isEllipseAbsent && 'section-light--ellipse',
        isSubtitleRight && 'subtitle-right'
      )}
    >
      <div className="hero-container hero">
        <div className={getClassNames('hero__content')}>{children}</div>
        <div className="hero__footer">
          <Link className="hero__footer__link" href="/portfolio">
            portfolio
          </Link>
          <div className="hero__footer__slider-wrapper">
            <span>We are</span>
            <Swiper
              slidesPerView={1}
              initialSlide={0}
              touchRatio={0}
              loop
              modules={[Autoplay]}
              autoplay={{
                delay: 1750,
                disableOnInteraction: false,
              }}
              direction="vertical"
            >
              <SwiperSlide className="title-slide">
                <span>innovators at heart</span>
              </SwiperSlide>
              <SwiperSlide className="title-slide">
                <span>technology architects</span>
              </SwiperSlide>
              <SwiperSlide className="title-slide">
                <span>visionary strategist</span>
              </SwiperSlide>
              <SwiperSlide className="title-slide">
                <span>creative problem solvers</span>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {!isEllipseAbsent && (
          <div className="hero__ellipse-container">
            <Image
              src="/assets/images/ellipse-left.png"
              className="hero__ellipse hero__ellipse--left"
              alt="Ellipse-left"
              width="100"
              height="100"
              priority
              unoptimized
            />
            <Image
              src="/assets/images/ellipse-right.png"
              className="hero__ellipse hero__ellipse--right"
              alt="Ellipse-right"
              width="100"
              height="100"
              priority
              unoptimized
            />
          </div>
        )}
      </div>
    </StyledHero>
  );
}
