import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledServices = styled.section`
  &::before {
    content: none;
  }
  .content-block {
    height: 100vh;
    width: 100%;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    &__note {
      font-size: 400;
      display: block;
      font-size: 12px;
      color: ${colors.grey};
    }
    &__line {
      display: block;
      margin: 40px auto;
      height: 55px;
      background-color: rgba(250, 247, 245, 0.2);
      width: 1px;
    }
    &__title {
      font-size: 60px;
      line-height: 70px;
      margin: 0 0 25px 0;
    }
    &__description {
      max-width: 600px;
      font-weight: 400;
      font-size: 14px;
      line-height: 26px;
    }
    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      z-index: 0;
      pointer-events: none;
    }
  }
  @media ${mqMax(breakpoints.md)} {
    padding: 100px 0;
    &::before {
      content: '';
      width: 250px;
      height: 250px;
    }
    .content-block {
      height: auto;
      min-height: 100vh;
      padding: 0 20px;
      margin-bottom: 100px;
      &:first-child {
        strong {
          display: block;
        }
      }
      &__title {
        text-align: left;
        align-self: flex-start;
        font-size: 30px;
        line-height: 40px;
      }
      &__line {
        margin: 10vh auto;
      }
      &__description {
        text-align: left;
      }
      &__background {
        background-size: 100% !important;
      }
    }
  }
`;
