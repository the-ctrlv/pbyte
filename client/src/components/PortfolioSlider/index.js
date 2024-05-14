/* eslint-disable prettier/prettier */
import Link from 'next/link';
import Image from 'next/image';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useState } from 'react';

import { StyledPortfolioSlider } from './styles';

import 'swiper/swiper-bundle.min.css';

export default function PortfolioSlider({ ourProjects }) {
  const [swiper, setSwiper] = useState(null);

  return (
    <StyledPortfolioSlider className="section-dark portfolio-slider">
      <div className="portfolio-slider__title-wrapper">
        <h2 className="portfolio-slider__title">Profit-Driving Projects</h2>
        <h2 className="portfolio-slider__title">Expertly Crafted</h2>
        <div className="portfolio-slider__title-wrapper__bottom">
          <div className="portfolio-slider__buttons">
            <span
              className="portfolio-slider__button portfolio-slider__button--prev"
              onClick={() => swiper.slidePrev()}
            />
            <span
              className="portfolio-slider__button portfolio-slider__button--next"
              onClick={() => swiper.slideNext()}
            />
          </div>
          <h2>by Our Team</h2>
        </div>
      </div>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            sliderPerView: 2.5,
          },
        }}
        slidesPerView={2.5}
        initialSlide={0}
        centeredSlides
        spaceBetween={70}
        onSwiper={(s) => {
          setSwiper(s);
        }}
      >
        {ourProjects?.map(
          (slide, i) =>
            slide.displayOnWebsite && (
              <SwiperSlide key={i}>
                <Link href={slide.site}>
                  <Image
                    src={slide.coverImage.url}
                    alt={slide.coverImage.altText}
                    width="100"
                    height="100"
                    unoptimized
                  />
                  <span className="portfolio-slider__service">
                    {slide.client}
                  </span>
                  <span className="portfolio-slider__year">{slide.year}</span>
                </Link>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </StyledPortfolioSlider>
  );
}
