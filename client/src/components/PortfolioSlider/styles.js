import { breakpoints, colors, mqMax } from 'shared';

import styled from 'styled-components';

export const StyledPortfolioSlider = styled.section`
  padding: 140px 0 160px;
  .portfolio-slider {
    &__title-wrapper {
      text-align: center;
      overflow: hidden;
      h2 {
        font-size: 36px;
        margin: 0 0 10px 0;
      }
      > h2 {
        &:first-child {
          transform: translateX(100px);
        }
        &:nth-child(2) {
          transform: translateX(-100px);
        }
      }
      &__bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
    }
    &__buttons {
      display: flex;
      margin-right: 140px;
      height: 50px;
      position: relative;
    }
    &__button {
      display: block;
      width: 50px;
      height: 100%;
      background: url('/assets/icons/link-arrow.svg') center center/contain
        no-repeat;
      &--prev {
        transform: rotate(180deg);
        margin-right: 50px;
      }
    }
    &__service {
      position: absolute;
      bottom: 0;
    }
    &__year,
    &__service {
      position: absolute;
      bottom: -30px;
      font-family: 'Montserrat';
      font-weight: 700;
      color: ${colors.grey};
    }
    &__year {
      right: 0;
    }
    &__service {
      left: 0;
    }
  }
  .swiper-wrapper {
    display: flex;
  }
  .swiper {
    padding: 50px 0;
    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: url('/assets/images/portfolio.png') center center/80%
        no-repeat;
    }
    .swiper-slide {
      height: 100%;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    padding: 60px 20px;
    .portfolio-slider {
      &__title-wrapper {
        > h2 {
          transform: none !important;
        }
        h2 {
          font-size: 18px;
        }
      }
      &__buttons {
        display: none;
      }
    }
    .swiper {
      padding: 30px 0;
    }
  }
`;
