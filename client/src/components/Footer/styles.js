import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 50px 50px 30px 50px;
  .footer-container {
    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 100px;
      nav {
        display: flex;
        gap: 3vw;
        border-bottom: 1px solid ${colors.grey};
      }
      &__link {
        font-family: 'Krona One';
        font-size: 30px;
        line-height: 35px;
        font-weight: 400;
        padding: 15px;
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          background-color: ${colors.dark};
          height: 1px;
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
      align-items: center;
      font-family: 'Montserrat';
      font-weight: 400;
      color: ${colors.grey};
      font-size: 12px;
      &__copyright {
        line-height: 20px;
        max-width: 350px;
        font-size: 12px;
      }
      &__links {
        display: flex;
        gap: 30px;

        a {
          font-weight: 500;
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  @media ${mqMax(breakpoints.xl)} {
    padding: 60px 30px;
    .footer-container {
      &__top {
        flex-direction: column;
        align-items: start;
        margin-bottom: 60px;
        img {
          margin-bottom: 30px;
          transform: translateX(-6px);
        }
        nav {
          padding-top: 30px;
          border-top: 1px solid ${colors.grey};
          border-bottom: none;
          flex-flow: wrap;
          gap: 0;
          width: 100%;
        }
        &__link {
          width: 100%;
          padding-left: 0;
          margin-bottom: 0;
        }
      }
      &__bottom {
        flex-direction: column-reverse;
        align-items: flex-start;
        &__links {
          display: block;
          width: 100%;
          margin-bottom: 50px;
          a {
            display: block;
            &:not(:last-child) {
              margin-bottom: 15px;
            }
          }
        }
        &__copyright {
          max-width: 330px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    padding: 60px 20px;
    .footer-container {
      &__top {
        margin-bottom: 34px;
        &__link {
          font-size: 18px;
          line-height: 20px;
          padding: 7px 7px 0 0;
        }
      }
      &__bottom {
        font-size: 12px;
      }
    }
  }
`;
