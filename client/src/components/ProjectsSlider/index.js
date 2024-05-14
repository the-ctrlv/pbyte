/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import ReactHoverObserver from 'react-hover-observer';
import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { getClassNames, useMousePosition, useWindowResize } from 'shared';
import { slidesQuantity } from './helpers';

import { StyledSwiper } from './styles';
import 'swiper/swiper-bundle.min.css';

export default function ProjectsSlider({
  setSlideIndex,
  setSlideChangeDirection,
}) {
  const [swiper, setSwiper] = useState(null);
  const hoverTarget = useRef(null);
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { currentX, currentY } = useMousePosition(isMouseHover, hoverTarget);
  const [randomMousePosition, setRandomMousePosition] = useState({
    randomX: null,
    randomY: null,
  });
  const { width } = useWindowResize();

  useEffect(() => {
    setIsMobile(width < 1025);
  }, [width]);

  useEffect(() => {
    if (window && hoverTarget.current) {
      setDeviceWidth(hoverTarget.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    if (!isMouseHover) {
      setRandomMousePosition({
        randomX: hoverTarget.current.clientWidth * Math.random(),
        randomY: hoverTarget.current.clientHeight * Math.random(),
      });
    }
  }, [isMouseHover]);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setSlideIndex(swiper.realIndex);
      });
      if (isMobile) {
        setSlideChangeDirection(
          swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev'
        );
      }
    }
  }, [swiper, setSlideIndex, setSlideChangeDirection, isMobile]);

  const handleSlideChange = () => {
    if (!isMobile) {
      if (deviceWidth / 2 < currentX) {
        setSlideChangeDirection('next');
        swiper.slideNext();
      } else {
        setSlideChangeDirection('prev');
        swiper.slidePrev();
      }
    }
  };

  return (
    <ReactHoverObserver
      onMouseLeave={() => setIsMouseHover(false)}
      onMouseOver={() => setIsMouseHover(true)}
    >
      <StyledSwiper
        {...slidesQuantity}
        slidesPerView="auto"
        spaceBetween="auto"
        centeredSlides
        initialSlide={0}
        touchRatio={0}
        modules={[Navigation]}
        navigation={isMobile}
        loop
        ref={hoverTarget}
        onSwiper={(s) => {
          setSwiper(s);
        }}
        onClick={() => handleSlideChange()}
      >
        <SwiperSlide className="project-slide">
          <div
            className="project-slide__image"
            style={{
              background: `url(https://cdn.sanity.io/images/vanqukwj/production/48bd999b0733d3b6c798b318c0e467c6b8a51b04-1170x780.jpg) center top/cover no-repeat`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="project-slide">
          <div
            className="project-slide__image"
            style={{
              background: `url(https://cdn.sanity.io/images/vanqukwj/production/69098ed6454af96138458b5bd31e6c3d7aafe5f7-1171x780.jpg) center top/cover no-repeat`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="project-slide">
          <div
            className="project-slide__image"
            style={{
              background: `url(https://cdn.sanity.io/images/vanqukwj/production/2190ac6de7625286a4a83ab23f4994779494f364-1170x780.jpg) center top/cover no-repeat`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="project-slide">
          <div
            className="project-slide__image"
            style={{
              background: `url(https://cdn.sanity.io/images/vanqukwj/production/3d6a61e3ee0753469c8083a9d12a0e8d5bcbbc1f-1170x780.jpg) center top/cover no-repeat`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="project-slide">
          <div
            className="project-slide__image"
            style={{
              background: `url(https://cdn.sanity.io/images/vanqukwj/production/f803f2611f09b097655eca1df6bcb98d883f34c5-1365x780.jpg) center top/cover no-repeat`,
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="project-slide">
          <div
            className="project-slide__image"
            style={{
              background: `url(https://cdn.sanity.io/images/vanqukwj/production/eeaefa67bb5760271b78ea57bc91e3aae2474a25-1170x780.jpg) center top/cover no-repeat`,
            }}
          />
        </SwiperSlide>
        {!isMobile && (
          <div className="mouse-follow-wrapper mouse-follow-wrapper--grey">
            <div
              className={getClassNames(
                'mouse-follow',
                deviceWidth / 2 >
                  (isMouseHover ? currentX : randomMousePosition.randomX)
                  ? 'mouse-follow--left'
                  : ''
              )}
              style={{
                // eslint-disable-next-line prettier/prettier
                left: `${
                  isMouseHover ? currentX : randomMousePosition.randomX
                }px`,
                // eslint-disable-next-line prettier/prettier
                top: `${
                  isMouseHover ? currentY : randomMousePosition.randomY
                }px`,
                transition: isMouseHover ? 'none' : 'all 1.5s ease',
              }}
            >
              <Image
                src="/assets/icons/slider-arrow.svg"
                alt="mouse"
                width="148"
                height="148"
              />
            </div>
          </div>
        )}
      </StyledSwiper>
    </ReactHoverObserver>
  );
}
