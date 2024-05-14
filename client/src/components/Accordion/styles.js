import { breakpoints, mqMax } from 'shared';

import styled from 'styled-components';

export const StyledAccordion = styled.li`
  border-bottom: 0.1px solid #12121257;
  cursor:
    url('/assets/icons/mouse-dark.svg') 20 20,
    auto;
  && {
    margin-bottom: 30px;
  }
  .accordion {
    &__header {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 30px;
      transition: all 1s ease;
      position: relative;
      h4 {
        font-family: 'Krona One';
        font-weight: 400;
        font-size: 35px;
        line-height: 36px;
        margin: 0 0 0 20px;
        white-space: nowrap;
      }
    }
    &__icon {
      width: 43px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.5s ease;
      display: block;
      &.active {
        transform: rotate(-540deg);
      }
    }
    &__description {
      overflow: hidden;
      border-radius: 0px 0px 25px 25px;
      transition-duration: 0.6s;
      transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

      p {
        font-family: 'Montserrat';
        font-weight: 600;
        line-height: 24px;
        font-size: 14px;
        padding: 0 0 30px 63px;
        text-align: justify;
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .accordion {
      &__header {
        padding-bottom: 20px;
        h4 {
          font-size: 25px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    && {
      margin-bottom: 20px;
    }
    .accordion {
      &__description {
        p {
          line-height: 20px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .accordion {
      &__header {
        padding-bottom: 10px;
        h4 {
          font-size: 18px;
          margin-left: 10px;
        }
      }
      &__icon {
        width: 28px;
        height: 28px;
        transform: translateY(-5px);
      }
      &__description {
        p {
          font-size: 14px;
          padding: 0 15px 43px 38px;
          line-height: 22px;
        }
      }
    }
  }
`;
