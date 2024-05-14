import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledNiches = styled.section`
  padding: 140px 0 160px;
  .niches {
    &__pre-title {
      display: block;
      text-align: center;
      font-size: 12px;
      font-family: 'Montserrat';
      font-weight: 700;
      color: ${colors.grey};
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 0.5px;
        height: 75px;
        background-color: #faf7f5;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 30px 0 50px;
      }
    }
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__row {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }
      &__item {
        font-family: 'Krona One';
        font-weight: 400;
        font-size: 60px;
        line-height: 70px;
        position: relative;
        display: inline-block;
        margin-right: 30px;
        list-style: none;
        &:nth-child(3n + 1) {
          color: #9c9b9a;
        }
        &::after {
          content: '';
          display: block;
          width: 18px;
          height: 18px;
          position: absolute;
          right: -25px;
          top: 50%;
          transform: translateY(-50%);
          background: url(/assets/icons/star.png) center center/contain
            no-repeat;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    padding: 80px 0 100px;
    .niches {
      &__wrapper {
        &__row {
          margin: 0;
        }
        &__item {
          display: block;
          margin: 0 0 40px 0;
          font-size: 30px;
          text-align: center;
          width: 100%;
          &::after {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            top: auto;
            bottom: -30px;
          }
        }
      }
    }
  }
`;
