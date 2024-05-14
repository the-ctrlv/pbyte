import { breakpoints, mqMax } from 'shared';

import styled from 'styled-components';

export const StyledSteps = styled.section`
  position: relative;
  overflow: hidden;
  &::before {
    left: 50%;
    transform: translateX(-50%);
    filter: blur(70px);
    top: 5%;
  }
  padding: 140px 0;
  .steps {
    display: flex;
    &__left-content {
      flex-grow: 1;
      text-align: right;
      padding-right: 60px;
      width: 40%;
      h2 {
        margin: 0;
        font-size: 50px;
        line-height: 60px;
        padding-bottom: 20px;
      }
      img {
        width: auto;
        height: 255px;
      }
      p {
        padding-bottom: 10px;
      }
    }
    &__right-content {
      width: 40%;
      padding-left: 60px;
      border-left: 1px solid #12121257;
      h2 {
        margin: 0;
        font-size: 40px;
        line-height: 60px;
        padding-bottom: 30px;
      }
      &__item {
        list-style: none;
        &:not(:last-child) {
          margin-bottom: 40px;
        }
        h4 {
          font-size: 30px;
          margin: 0 0 20px 0;
        }
        h5 {
          font-size: 20px;
          margin: 0 0 15px 0;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .steps {
      flex-flow: wrap;
      flex-direction: column;
      &__left-content {
        width: 100%;
        text-align: left;
        border-left: 1px solid #12121257;
        padding: 0 0 0 60px;
      }
      &__right-content {
        width: 100%;
        display: flex;
        flex-flow: wrap;
        &__item {
          width: 50%;
        }
        p {
          max-width: 400px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    &::before {
      width: 300px;
      height: 300px;
      top: 20%;
    }
    .steps {
      &__left-content {
        padding-left: 20px;
        h2 {
          font-size: 24px;
          line-height: 34px;
        }
        img {
          height: auto;
          width: 100%;
          margin: 10px 0;
        }
      }
      &__right-content {
        padding-left: 20px;
        h2 {
          font-size: 24px;
          line-height: 34px;
          padding-bottom: 25px;
        }
        &__item {
          width: 100%;
          h4 {
            font-size: 20px;
            line-height: 24px;
          }
          h5 {
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
    }
  }
`;
