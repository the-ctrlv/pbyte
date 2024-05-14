/* eslint-disable import/no-extraneous-dependencies */
import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';
import { Swiper as SwiperComponent } from 'swiper/react';

export const StyledTitleSwiper = styled(SwiperComponent)`
  height: 325px;
  .title-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__title {
      margin: 0 0 25px 0;
      font-size: 50px;
      line-height: 50px;
    }
    &__description {
      max-width: 350px;
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .title-slide {
      transform: translateY(10%);
      &__title {
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 10px;
      }
      &__description {
        font-size: 14px;
      }
    }
  }
`;
