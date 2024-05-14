import styled from 'styled-components';

import { breakpoints, colors, mqMax } from 'shared';

export const StyledHero = styled.section`
  &::before {
    top: 10%;
    left: 50%;
    filter: blur(70px);
    transform: translateX(-50%);
  }
  &.section-light {
    .hero__footer__link::after {
      background-color: ${colors.dark};
    }
  }
  &.subtitle-right {
    &::before {
      transform: none;
      left: 65%;
      top: 30%;
    }
    .hero__title {
      font-size: 80px;
      text-transform: none;

      &.small {
        max-width: 1000px;
        font-size: 60px;
        line-height: 70px;
      }
      &::before {
        content: '';
        display: block;
        width: 1px;
        height: 55px;
        background-color: ${colors.lineColor};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -80px;
      }
    }
    .hero__subtitle {
      position: absolute;
      left: 50%;
      bottom: -100px;
      text-align: left;
      padding-left: 30px;
      max-width: 450px;
      border-left: 1px solid #12121240;
      font-size: 14px;
    }
  }
  .hero {
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;

    &__content {
      position: absolute;
      width: 100%;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    &__title {
      font-size: 80px;
      line-height: 90px;
      width: 100%;
      font-family: 'Krona One';
      font-weight: 400;
      max-width: 80vw;
      transform: translateY(50%);
      opacity: 0;
      &.with-lines {
        &::before {
          content: '';
          display: block;
          width: 1px;
          height: 75px;
          background-color: ${colors.lineColor};
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -150px;
        }
        &::after {
          content: '';
          display: block;
          width: 1px;
          height: 75px;
          background-color: ${colors.lineColor};
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -220px;
        }
      }
    }
    .subtitle-animated {
      transform: translateY(50%);
      opacity: 0;
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      position: relative;
      z-index: 10;
      font-family: 'Montserrat';
      transform: translateY(50%);
      opacity: 0;
      &__link {
        font-family: 'Montserrat';
        font-weight: 700;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0;
          background-color: #fff;
          height: 2px;
          transition: all 0.2s ease-in-out;
        }
        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
      p {
        font-family: 'Montserrat';
        font-weight: 700;
        span {
          display: block;
          font-weight: 700;
          font-size: 16px;
          &:first-child {
            opacity: 0.65;
            text-align: right;
            font-weight: 600;
          }
        }
      }
      &__slider-wrapper {
        height: 50px;
        position: relative;
        text-align: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        > span {
          font-weight: 500;
          opacity: 0.65;
          font-size: 16px;
        }
        .swiper {
          height: 25px;
          overflow: hidden;
          &-slide {
            margin-bottom: 0 !important;
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
          }
          span {
            display: block;
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
    }
    &__ellipse-container {
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
    }
    &__ellipse {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 150vh;
      width: 150vh;
      z-index: 0;
      mix-blend-mode: hard-light;
      opacity: 0.5;
      user-select: none;
      &--left {
        transform: translate(-200%, -50%);
      }
      &--right {
        transform: translate(200%, -50%);
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    &::before,
    &.subtitle-right::before {
      width: 200px;
      height: 200px;
      left: 20%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .hero {
      &__title {
        font-size: 65px;
        line-height: 70px;
      }
      &__ellipse {
        height: 100vh;
        width: 100vh;
      }
    }
    &.subtitle-right {
      .hero {
        &__title {
          font-size: 60px;
          max-width: 90vw;
          &.small {
            max-width: 90vw;
          }
        }
        &__subtitle {
          font-size: 12px;
          line-height: 18px;
          max-width: 350px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .hero {
      padding: 20px;
      &__title {
        font-size: 34px;
        line-height: 44px;
        max-width: none;
        &.small {
          max-width: none;
        }
      }
      &__ellipse {
        &--left {
          right: -140vw;
          left: auto;
        }
        &--right {
          left: 70vw;
          right: auto;
        }
      }
      &__subtitle {
        font-size: 16px;
      }
      &__footer {
        font-size: 16px;
      }
    }
    &.subtitle-right {
      .hero {
        &__content {
          width: calc(100% - 40px);
        }
        &__title {
          text-align: left;
          font-size: 34px;
          &.small {
            font-size: 30px;
            line-height: 40px;
          }
          &::before {
            left: 0;
            width: 1.5px;
          }
        }
        &__subtitle {
          position: relative;
          left: auto;
          bottom: auto;
          padding-left: 20px;
          font-size: 14px;
          line-height: 22px;
          max-width: none;
        }
      }
    }
  }
`;
