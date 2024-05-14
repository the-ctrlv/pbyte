import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledWhatWeLove = styled.section`
  position: relative;
  padding: 130px 0;
  height: 100vh;
  display: flex;
  align-items: center;
  &::before {
    top: 20%;
    right: 10%;
  }
  .what-we-love {
    display: flex;
    &__text-content {
      width: 45%;
      text-align: right;
      padding-right: 4vw;
      border-right: 1px solid #faf7f533;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      h3 {
        font-size: 30px;
        line-height: 35px;
        margin: 0 0 10px 0;
      }
      p {
        font-family: 'Montserrat';
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        display: block;
        margin-bottom: 35px;
      }
    }
    &__title-wrapper {
      width: 55%;
      padding-left: 4vw;
      h2 {
        margin: 0;
        font-size: 70px;
        line-height: 70px;
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .what-we-love {
      &__title-wrapper {
        h2 {
          font-size: 58px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    padding: 120px 0;
    &::before {
      width: 200px;
      height: 200px;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
    }
    .what-we-love {
      flex-direction: column-reverse;
      border-left: 1px solid #faf7f533;
      &__text-content {
        width: 100%;
        align-items: flex-start;
        padding: 0 0 0 35px;
        border-right: none;
        text-align: start;
        h3 {
          font-size: 25px;
          line-height: 30px;
        }
        p:last-child {
          margin-bottom: 10px;
        }
      }
      &__title-wrapper {
        text-align: start;
        padding: 0 0 0 35px;
        width: 100%;
        margin-bottom: 40px;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .what-we-love {
      &__text-content {
        padding: 0 0 0 20px;
        h3 {
          font-size: 18px;
        }
      }
      &__title-wrapper {
        padding: 0 0 0 20px;
        h2 {
          font-size: 34px;
          line-height: 44px;
        }
      }
    }
  }
`;
