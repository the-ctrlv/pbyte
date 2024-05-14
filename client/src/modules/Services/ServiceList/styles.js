import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledServiceList = styled.section`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  &::before {
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .service-list {
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(250, 247, 245, 0.2);
      margin-bottom: 50px;
      list-style: none;
      &__wrapper {
        flex-grow: 1;
        > a {
          font-family: 'Montserrat';
          position: relative;
          padding: 20px 50px 20px 0;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: inline-block;
          &::after {
            content: '';
            display: block;
            width: 30px;
            height: 14px;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            transition: right 0.3s ease-in-out;
            background: url('/assets/icons/link-arrow.svg') center
              center/contain no-repeat;
          }
          &:hover {
            color: ${colors.light};
            &::after {
              right: -15px;
            }
          }
        }
      }
      h3 {
        font-size: 36px;
        margin: 0 0 25px 0;
      }
      p {
        font-size: 14px;
        line-height: 24px;
        margin: 0 0 15px 0;
        padding-right: 30px;
        max-width: 610px;
        font-weight: 400;
      }
    }
  }
  @media ${mqMax(breakpoints.xl)} {
    .service-list {
      &__item {
        flex-direction: column;
        align-items: flex-start;
        &__wrapper {
          width: 100%;
        }
        .btn-ellipse {
          margin-bottom: 50px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .service-list {
      &__item {
        h3 {
          font-size: 18px;
        }
      }
      .btn-ellipse {
        width: 100%;
      }
    }
  }
`;
