import styled from 'styled-components';

import { breakpoints, colors, mqMax } from 'shared';

export const StyledMenu = styled.div`
  cursor:
    url('/assets/icons/mouse-dark.svg') 20 20,
    auto;
  position: fixed;
  background-color: ${colors.dark};
  color: ${colors.light};
  left: 0;
  top: 0;
  z-index: 1050;
  /* opacity: 0; */
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
  height: 100vh;
  width: 100vw;
  &.active {
    /* opacity: 1; */
    transform: translateY(0);
  }
  .menu-wrapper {
    height: 100vh;
    width: 100vw;
    visibility: hidden;
  }
  .menu {
    font-family: 'Montserrat';
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1020;
    padding: 80px 100px;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: flex-end;
    &__nav {
      display: flex;
      width: 80%;
      flex-flow: wrap;
      justify-content: center;
      gap: 2vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 1200px;
      &__wrapper {
        overflow: hidden;
        padding: 20px 50px;
      }
      &__link {
        font-family: 'Krona One';
        display: block;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 50px;
        line-height: 55px;
        position: relative;
        transform: translateY(-150%);
        .index {
          opacity: 0;
          transform: scale(0);
          font-family: 'Montserrat';
          font-size: 25px;
          line-height: 25px;
          position: absolute;
          top: -20px;
          right: -50px;
        }
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
    }
    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      &__copyright {
        font-size: 12px;
        opacity: 0.76;
      }
      &__links {
        a {
          font-size: 14px;
          font-weight: 700;
          &:nth-child(1) {
            margin-right: 50px;
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    .menu {
      padding: 30px;
      &__nav {
        gap: 0;
        transform: translate(-50%, -60%);
        &__wrapper {
          width: 100%;
          padding: 10px 30px;
        }
        &__link {
          font-size: 24px;
          display: flex;
          flex-direction: column-reverse;
          width: 100%;
          text-align: center;
          line-height: 35px;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
          .index {
            position: relative;
            top: auto;
            right: auto;
            font-size: 18px;
          }
        }
      }
      &__bottom {
        flex-direction: column-reverse;
        align-items: center;
        &__links {
          margin-bottom: 35px;
          display: flex;
          align-items: center;
          flex-direction: column-reverse;
          a {
            display: block;
            margin-bottom: 15px;
            &:nth-child(1) {
              margin: 0;
            }
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .hamburger-menu {
      top: 20px;
      right: 20px;
    }
    .menu {
      padding: 50px 50px;
    }
  }
`;
