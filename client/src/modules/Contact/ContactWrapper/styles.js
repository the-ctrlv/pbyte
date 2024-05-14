import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledContactWrapper = styled.section`
  min-height: calc(100vh - 286px);
  padding: 170px 0;
  display: flex;
  align-items: center;
  .contact-wrapper {
    display: flex;
    &__left {
      width: 500px;
    }
    &__pre-title {
      font-size: 12px;
      font-weight: 600;
      line-height: 20px;
      font-family: 'Montserrat';
      letter-spacing: 2px;
      color: ${colors.grey};
      text-transform: uppercase;
    }
    &__title {
      font-size: 80px;
      line-height: 90px;
    }
    &__right {
      width: calc(100% - 500px);
      .mouse-follow {
        background-color: transparent;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    padding: 100px 0;
    .contact-wrapper {
      flex-direction: column;
      &__left {
        width: 100%;
      }
      &__title {
        font-size: 34px;
        line-height: 44px;
      }
      &__right {
        width: 100%;
      }
      .social-list {
        display: none;
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    padding-bottom: 100px;
    .contact-wrapper {
      flex-direction: column;
      &__left {
        text-align: center;
        margin-bottom: 80px;
        width: 100%;
        .social-list {
          max-width: 500px;
          margin: 0 auto;
        }
      }
      &__right {
        width: 100%;
      }
    }
  }
`;
