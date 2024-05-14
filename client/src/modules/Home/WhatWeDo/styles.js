import styled from 'styled-components';
import { breakpoints, colors, mqMax, mqMin } from 'shared';

export const StyledWhatWeDo = styled.section`
  color: ${colors.dark};
  height: auto;
  position: relative;
  flex-direction: row;
  &::before {
    top: 20vw;
    left: 15vw;
  }
  .content-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .what-we-do {
    display: flex;
    flex-flow: nowrap;
    padding: 124px 0 155px;
    &__title-wrapper {
      width: 40%;
      font-family: 'Krona One';
      text-align: right;
      h2 {
        font-size: 70px;
        line-height: 80px;
        margin: 0;
        padding: 30px 50px 0 0;
      }
    }
    &__services {
      list-style: none;
      ul {
        width: 60%;
        padding: 0;
        margin: 0;
      }
    }
  }
  @media ${mqMin(breakpoints.desktop)} {
    .what-we-do {
      &__title-wrapper {
        width: 50%;
      }
      &__services {
        width: 50%;
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .what-we-do {
      &__title-wrapper {
        width: 50%;
        h2 {
          font-size: 60px;
        }
      }
      &__services {
        width: 50%;
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    &::before {
      width: 300px;
      height: 300px;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
    }
    .what-we-do {
      flex-flow: wrap;
      padding: 100px 0 120px;
      &__title-wrapper {
        width: 100%;
        h2 {
          font-size: 45px;
          text-align: center;
          line-height: 55px;
          margin-bottom: 50px;
          padding: 0;
          br:first-child {
            display: none;
          }
        }
      }
      &__services {
        width: 100%;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    &::before {
      width: 220px;
      height: 220px;
    }
    .what-we-do {
      &__title-wrapper {
        h2 {
          font-size: 34px;
        }
      }
    }
  }
`;
