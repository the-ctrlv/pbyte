/* eslint-disable prettier/prettier */
import { SwiperSlide, Swiper } from 'swiper/react';
import { useState } from 'react';

import Article from 'components/Article';

import 'swiper/swiper-bundle.min.css';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledSuggestedArticles } from './styles';


export default function SuggestedArticles({ posts }) {
  const [swiper, setSwiper] = useState(null);

  return (
    <MouseFollowProvider theme="dark">
      <StyledSuggestedArticles className="section-dark article-slider">
        <div className="content-container">
          <div className="article-slider__title-wrapper">
            <h2 className="article-slider__title">You may also be interested:</h2>
            {posts?.length > 2 && (
              <div className="article-slider__buttons">
                <span
                  className="article-slider__button article-slider__button--prev"
                  onClick={() => swiper.slidePrev()}
                />
                <span
                  className="article-slider__button article-slider__button--next"
                  onClick={() => swiper.slideNext()}
                />
              </div>
            )}
          </div>
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={2}
            initialSlide={0}
            loop
            spaceBetween={70}
            onSwiper={(s) => {
              setSwiper(s);
            }}
          >
            {posts?.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Article article={slide} isVertical />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </StyledSuggestedArticles>
    </MouseFollowProvider>
  );
}
