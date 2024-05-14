import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledPathToSuccess = styled.section`
  position: relative;
  &::before {
    right: 20%;
    top: 30%;
  }
  .success {
    padding: 130px 0;
    h2 {
      font-size: 70px;
      margin: 0;
    }
    > h2 {
      text-align: center;
      margin-bottom: -30px;
    }
    &__under-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__line {
        flex-grow: 1;
        height: 1px;
        background-color: ${colors.lineColor};
        display: block;
        margin: 0 2vw 0 6vw;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
    &__list {
      display: flex;
      flex-flow: nowrap;
      margin-top: 60px;
      padding: 0;
      &__item {
        width: 25%;
        padding: 20px 30px;
        position: relative;
        list-style: none;
        &__number {
          font-family: 'Montserrat';
          font-size: 18px;
          transform: rotate(-90deg);
          font-weight: 700;
          display: inline-block;
        }
        h3 {
          margin-bottom: 20px;
          font-size: 28px;
          white-space: nowrap;
        }
        p {
          font-size: 14px;
          line-height: 22px;
        }
        &:not(:last-child) {
          &::after {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            background-color: ${colors.lineColor};
            width: 1px;
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .success {
      &__list {
        &__item {
          h3 {
            font-size: 25px;
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    &::before {
      width: 400px;
      height: 400px;
      filter: blur(80px);
      right: 5%;
      top: 20%;
    }
    .success {
      > h2 {
        margin-bottom: 0;
      }
      &__under-title {
        flex-flow: wrap;
        h2 {
          width: 100%;
          margin-bottom: 20px;
        }
        img {
          width: 200px;
          height: 200px;
          margin-left: 50px;
        }
      }
      &__list {
        flex-flow: wrap;
        &__item {
          width: 50%;
          margin-bottom: 50px;
          h3 {
            font-size: 40px;
          }
          &:nth-child(2) {
            &::after {
              content: none;
            }
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    &::before {
      width: 300px;
      height: 300px;
    }
    .success {
      padding: 100px 0;
      h2 {
        font-size: 34px;
      }
      > h2 {
        text-align: right;
        margin-bottom: 10px;
      }
      &__under-title {
        img {
          width: 150px;
          height: 150px;
          margin-left: 20px;
        }
      }
      &__list {
        margin-top: 0;
        &__item {
          padding: 0 20px;
          width: 100%;
          margin-bottom: 40px;
          &::after {
            content: none !important;
          }
          h3 {
            font-size: 18px;
          }
        }
      }
    }
  }
`;
