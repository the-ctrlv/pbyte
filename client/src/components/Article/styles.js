import Link from 'next/link';
import { breakpoints, colors, mqMax, mqMin } from 'shared';
import styled from 'styled-components';

export const StyledArticle = styled(Link)`
  &.article {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    @media ${mqMin(breakpoints.xxl)} {
      &--vertical {
        display: block;
        width: calc(50% - 15px);
        .article {
          &__image-wrapper {
            width: 100%;
            margin-bottom: 30px;
          }
          &__content {
            width: 100%;
            margin-left: 0;
            &__date {
              right: 0;
              left: auto;
            }
          }
        }
      }
    }
  }
  .article {
    position: relative;
    &__image-wrapper {
      position: relative;
      width: 35%;
      img {
        width: 100%;
        height: 100%;
      }
      &__filter {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 14px;
        font-family: 'Krona One';
        font-weight: 400;
        border-radius: 100px;
        color: ${colors.light};
        background: rgba(244, 242, 235, 0.7);
        backdrop-filter: blur(10px);
        padding: 10px 24px;
        color: #1f1714;
      }
    }
    &__content {
      position: relative;
      width: 65%;
      margin-left: 90px;
      display: flex;
      align-items: flex-end;
      position: relative;
      &__date {
        position: absolute;
        left: 0;
        top: 0;
        font-family: 'Montserrat';
        font-size: 16px;
      }
      &__title {
        margin: 0 0 20px 0;
        font-size: 20px;
        max-width: 80%;
        line-height: 25px;
      }
      &__description {
        max-width: 500px;
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &__link {
        font-size: 14px;
        color: ${colors.light};
        position: absolute;
        right: 35px;
        font-family: 'Montserrat';
        font-weight: 700;
        text-transform: uppercase;
        bottom: 0;
        &::after {
          content: '';
          display: block;
          width: 30px;
          height: 14px;
          position: absolute;
          right: -35px;
          top: 0;
          transition: right 0.3s ease-in-out;
          background: url('/assets/icons/link-arrow.svg') center center/contain
            no-repeat;
        }
        &:hover {
          &::after {
            right: -55px;
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .article {
      &__content {
        margin-left: 30px;
        &__link {
          display: none;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.lg)} {
    .article {
      &__image-wrapper {
        &__filter {
          padding: 10px 20px;
          top: 8px;
          right: 8px;
        }
      }
      &__content {
        &__title {
          font-size: 18px;
        }
        &__description {
          font-size: 16px;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    &.article {
      flex-direction: column;
    }
    .article {
      &__image-wrapper {
        width: 100%;
        margin-bottom: 30px;
      }
      &__content {
        width: 100%;
        margin-left: 0;
        &__title {
          margin-top: 20px;
        }
        &__description {
          -webkit-line-clamp: 3;
        }
      }
    }
  }
`;
