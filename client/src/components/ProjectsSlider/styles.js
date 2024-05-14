/* eslint-disable import/no-extraneous-dependencies */
import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';
import { Swiper as SwiperComponent } from 'swiper/react';

export const StyledSwiper = styled(SwiperComponent)`
  padding-bottom: 0;
  overflow: visible;
  height: 100%;
  &:hover {
    cursor: none;
  }
  .swiper-wrapper {
    align-items: stretch;
  }
  .project-slide {
    height: auto;
    position: relative;
    &__image {
      height: 100%;
      width: 100%;
    }
  }
  @media ${mqMax(breakpoints.xl)} {
    &:hover {
      cursor:
        url('/assets/icons/mouse-dark.svg') 20 20,
        auto;
    }
  }
`;
