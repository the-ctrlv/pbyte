import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledPortfolio = styled.section`
  overflow: hidden;
  position: relative;
  .portfolio {
    display: flex;
    flex-flow: nowrap;
    &__left-content {
      width: 50%;
      height: 100vh;
      padding: 9vh 7vw 19vh;
      position: relative;
      z-index: 1;
      background-color: ${colors.dark};
      [data-scroll] {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
      &__work-type {
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 12px;
        color: ${colors.grey};
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      &__link {
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: ${colors.grey};
        position: relative;
        padding: 10px;
        display: inline-block;
        &::after {
          content: '';
          display: block;
          width: 30px;
          height: 14px;
          position: absolute;
          right: -35px;
          top: 50%;
          transform: translateY(-50%);
          transition: right 0.3s ease-in-out;
          background: url('/assets/icons/link-arrow.svg') center center/contain
            no-repeat;
        }
        &:hover {
          color: ${colors.light};
          &::after {
            right: -65px;
          }
        }
      }
    }
    &__right-content {
      width: 50%;
      height: 100vh;
      position: relative;
      z-index: 0;
      > div {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media ${mqMax(breakpoints.xl)} {
    .portfolio {
      flex-direction: column-reverse;
      &__left-content {
        width: 100%;
        height: 50vh;
        padding: 50px 52px;
      }
      &__right-content {
        width: 100%;
        height: 50vh;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .portfolio {
      &__left-content {
        padding: 50px 20px;
        height: auto;
        &___work-type {
          font-size: 12px;
        }
        &__link {
          font-size: 14px;
          padding-left: 0;
        }
      }
    }
  }
`;
