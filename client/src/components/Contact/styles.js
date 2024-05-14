/* eslint-disable prettier/prettier */

import { breakpoints, colors, mqMax, mqMin } from 'shared';
import styled from 'styled-components';

export const StyledContact = styled.section`
  padding: 96px 0;
  &.section-light {
    .contact__button-wrapper {
      button {
        color: ${colors.dark};
      }
    }
  }
  &.contacts {
    padding: 0;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    .contact {
      @media ${mqMin(breakpoints.xxl)} {
        margin: 0;
      }
    }
    .contact__button-wrapper {
      background-color: ${(props) =>
        props.theme === 'dark' ? colors.dark : colors.light};
    }
  }
  .contact {
    max-width: 500px;
    text-align: center;
    font-family: 'Montserrat';
    label,
    input,
    button {
      cursor:
        url('/assets/icons/mouse-dark.svg') 20 20,
        auto;
    }
    &__pre-title {
      font-size: 12px;
      font-weight: 400;
      display: block;
      text-transform: uppercase;
      letter-spacing: 2px;
      opacity: 0.5;
      margin-bottom: 30px;
    }
    &__title {
      font-family: 'Krona One';
      font-weight: 400;
      font-size: 70px;
      line-height: 70px;
      margin: 0 0 30px 0;
    }
    &__tip {
      font-size: 14px;
      opacity: 0.5;
      display: block;
      margin-bottom: 13px;
    }
    &__animation-wrapper {
      min-height: 320px;
      position: relative;
      .target-1,
      .target-2 {
        position: absolute;
        top: 0;
        left: 0;
      }
      .target-3 {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 10px;
      }

      &.no-animation {
        .target-1,
        .target-2,
        .target-3 {
          opacity: 1;
          position: relative;
          top: auto;
          left: auto;
        }
        .target-1 {
          transform: translateY(-15px);
        }
        .target-2 {
          transform: translateY(-25px);
          background-color: transparent;
        }
        .target-3 {
          transform: translateY(-25px);
          background-color: transparent;
        }
        .contact__services__error {
          bottom: 20px;
        }
      }
    }
    &__services {
      cursor:
        url('/assets/icons/mouse-dark.svg') 20 20,
        auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      position: relative;
      &__label {
        display: flex;
        width: calc((100% / 4) - 10px);
        position: relative;
        input {
          display: none;
          &:checked + .border-wrapper {
            svg {
              fill: ${colors.light};
            }
            span {
              color: ${colors.dark};
            }
            &.border-wrapper--light {
              svg {
                fill: ${colors.dark};
              }
              span {
                color: ${colors.light};
              }
            }
          }
        }
        .border-wrapper {
          width: 100%;
          svg {
            width: 100%;
            height: 40px;
            cursor:
              url('/assets/icons/mouse-dark.svg') 20 20,
              auto;
          }
          span {
            position: absolute;
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);
            white-space: nowrap;
            text-align: center;
            font-size: 12px;
            pointer-events: none;
          }
        }
      }
      &__error {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -20px;
        font-weight: 400;
        font-size: 10px;
        color: #ff3333;
        white-space: nowrap;
        opacity: 1;
      }
    }
    &__label {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 105px;
      transition: opacity 0.3s ease-in-out;
      transition-delay: 0s;
      input {
        background-color: transparent;
        z-index: 1;
        font-size: 14px;
        border: none;
        width: 50%;
        color: ${(props) =>
          props.theme === 'light' ? colors.dark : colors.light};

        &::placeholder {
          text-align: center;
        }
      }

      &.hidden {
        opacity: 0;
        transition-delay: 0.8s;
      }
      &__border {
        width: 100%;
        height: 100%;
        position: absolute;
        background: ${(props) =>
            `url('/assets/icons/border-button${
              props.theme === 'light' ? '-black' : ''
            }.svg') center center/contain`}
          no-repeat;
        z-index: 0;
        opacity: 0.5;
      }
      &__error {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        font-weight: 400;
        font-size: 10px;
        color: #ff3333;
      }
    }
    &__button-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 105px;
      border-radius: 100%;
      background: ${(props) => `url('/assets/icons/border-button${
        props.theme === 'light' ? '-black' : ''
      }.svg') center center/contain
        no-repeat`};
      z-index: 1;
      button {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        color: ${colors.light};
        font-size: 18px;
        font-weight: 700;
        &::after {
          content: '';
          display: block;
          width: 30px;
          height: 14px;
          position: absolute;
          right: 25%;
          top: 50%;
          transform: translateY(-50%);
          transition: right 0.3s ease-in-out;
          background: url('/assets/icons/link-arrow.svg') center center/contain
            no-repeat;
        }
        &:hover {
          &::after {
            right: 20%;
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .contact {
      &__pre-title {
        font-size: 12px;
        max-width: 270px;
        margin: 0 auto 20px auto;
        line-height: 20px;
      }
      &__title {
        font-size: 34px;
        margin-bottom: 10px;
      }
      &__tip {
        font-size: 12px;
      }
      &__services {
        margin-bottom: 20px;
        &__label {
          width: calc((100% / 2) - 10px);
          margin-bottom: 10px;
        }
        &__error {
          bottom: -15px;
        }
      }
      &__button-wrapper {
        button {
          font-size: 16px;
          &::after {
            right: 15%;
          }
          &:hover {
            &::after {
              right: 10%;
            }
          }
        }
      }
    }
  }
`;
