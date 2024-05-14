import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledCaseStudySection = styled.section`
  background-color: ${colors.sectionGrey};
  overflow: hidden;
  &.postage-theme {
    background-color: #dadcdb;
  }
  .case-study {
    display: flex;
    padding: 100px 0;
    flex-flow: wrap;
    &__left {
      width: 35%;
      &__title {
        font-size: 20px;
        font-family: 'Krona One', sans-serif;
        text-transform: lowercase;
        &.numbered {
          &::before {
            content: ${({ sectionIndex }) => `'${sectionIndex}'`};
          }
        }
      }
    }
    &__right {
      width: 65%;
      &__title {
        font-size: 36px;
        line-height: 50px;
        margin: 0 0 20px;
      }
      &__text {
        font-weight: 400;
        color: #576262;
        padding-bottom: 20px;
        margin-bottom: 20px;
      }
      &__list {
        display: flex;
        width: 100%;
        position: relative;
        justify-content: space-between;
        .list-item {
          width: 33%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-bottom: 30px;
          &:first-child {
            width: 25%;
            justify-content: flex-start;
            border-right: 1px solid ${colors.lightGrey};
          }
          &:nth-child(2) {
            flex-grow: 1;
          }
          &:last-child {
            justify-content: flex-end;
            border-left: 1px solid ${colors.lightGrey};
          }
          &__title {
            font-size: 30px;
            line-height: 35px;
            font-weight: 400;
            margin: 0 0 20px;
            display: block;
            text-transform: lowercase;
            font-family: 'Krona One', sans-serif;
          }
          &__text {
            display: block;
            margin-bottom: 8px;
            font-family: 'Montserrat';
            font-size: 14px;
            font-weight: 600;
            &--link {
              font-family: 'Montserrat';
              text-decoration: underline;
              font-size: 14px;
            }
          }
        }
      }
    }
    .result-list {
      display: flex;
      .list-item {
        width: 130px;
        display: flex;
        flex-direction: column;
        text-align: center;
        &:first-child {
          width: 110px;
          text-align: start;
          border-right: 1px solid ${colors.lightGrey};
        }
        &:last-child {
          border-left: 1px solid ${colors.lightGrey};
        }
        &__title {
          font-size: 30px;
          line-height: 35px;
          font-weight: 400;
          margin: 0 0 20px;
          display: block;
          text-transform: lowercase;
          font-family: 'Krona One', sans-serif;
        }
        &__text {
          display: block;
          margin-bottom: 8px;
          font-family: 'Montserrat';
          font-size: 14px;
          font-weight: 600;
          &--link {
            font-family: 'Montserrat';
            text-decoration: underline;
            font-size: 14px;
          }
        }
      }
    }
  }
  .templated {
    padding: 0 0 100px;
    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      &:not(:last-child) {
        margin-bottom: 50px;
      }
    }
    .text-right {
      display: block;
      margin-bottom: 8px;
      font-family: 'Montserrat';
      font-size: 14px;
      font-weight: 600;
      color: #576262;
      margin: 0 0 50px 50%;
    }
  }
  .how-it-works {
    img {
      width: 80%;
    }
  }
  .overview {
    padding: 0 0 50px;
    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
  }
  .blog {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;
    img {
      width: 45%;
      height: auto;
    }
  }
  .contact {
    display: flex;
    flex-direction: column;
    img {
      width: 80%;
      height: auto;
      margin: 0 auto;
    }
  }
  .full-width {
    padding-bottom: 100px;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  .full-width-phone {
    height: 700px;
    margin-bottom: 50px;
    .mouse-follow {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 40vw;
        min-width: 350px;
        height: auto;
        transform: translateY(20%);
      }
    }
  }
  .brands-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
    &__white {
      background-color: #fff;
    }
    &__dark {
      background-color: ${colors.dark};
    }
    div {
      width: 48%;
      border-radius: 40px;
      position: relative;
      .square {
        padding-bottom: 100%;
        width: 100%;
      }
      img {
        position: absolute;
        width: 150px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .pitch-deck {
    margin-top: 100px;
    position: relative;
    span {
      font-size: 20px;
      font-family: 'Krona One', sans-serif;
      text-transform: lowercase;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .case-study {
      flex-flow: wrap;
      &__left {
        width: 100%;
        margin-bottom: 50px;
      }
      &__right {
        width: 100%;
        max-width: 800px;
      }
    }
    .pitch-deck {
      span {
        position: relative;
        margin-bottom: 20px;
        display: block;
      }
    }
    .templated {
      .text-right {
        margin-left: 0;
        max-width: 600px;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    padding-top: 50px;
    .case-study {
      padding: 50px 0;
      &__left {
        margin-bottom: 20px;
      }
      &__right {
        &__title {
          font-size: 24px;
          line-height: 34px;
        }
        &__text {
          font-size: 14px;
        }
        &__list {
          flex-flow: wrap;
          .list-item {
            width: 100%;
            display: block;
            margin-bottom: 10px;
            &:first-child,
            &:last-child {
              width: 100%;
              border-right: none;
              border-left: none;
              .list-item__text {
                margin: 0;
              }
            }
            &:not(:last-child) {
              > div {
                display: inline-block;
                padding: 0 20px 10px 0;
                border-bottom: 1px solid ${colors.lightGrey};
              }
            }
            &__title {
              font-size: 18px;
              margin: 0 0 10px;
              line-height: 24px;
            }
            &__text {
              font-size: 14px;
            }
          }
        }
        .result-list {
          flex-flow: wrap;
          .list-item {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: 10px;
            text-align: start;
            position: relative;
            &:first-child,
            &:last-child {
              width: 100%;
              border-right: none;
              border-left: none;
              .list-item__text {
                margin: 0;
              }
            }
            &:not(:last-child) {
              display: inline-block;
              padding: 0 20px 10px 0;
              &::after {
                content: '';
                display: block;
                width: 40%;
                height: 1px;
                position: absolute;
                bottom: 0;
                background-color: ${colors.lightGrey};
              }
            }
            &__title {
              font-size: 18px;
              margin: 0 0 10px;
              line-height: 24px;
            }
            &__text {
              font-size: 14px;
            }
          }
        }
      }
    }
    .brands-wrapper {
      div {
        img {
          width: 100px;
        }
      }
    }
    .templated {
      padding: 0 0 50px;
    }
    .full-width {
      padding-bottom: 50px;
    }
  }
`;
