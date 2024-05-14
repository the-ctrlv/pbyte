import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledSuggestedArticles = styled.section`
  && {
    padding: 100px 0;
  }
  .article-slider {
    &__title-wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
    }
    &__title {
      margin: 0;
      font-size: 36px;
    }
    &__buttons {
      display: flex;
      position: relative;
    }
    &__button {
      display: block;
      width: 80px;
      height: 20px;
      background: url('/assets/icons/link-arrow.svg') center center/contain
        no-repeat;
      &--prev {
        transform: rotate(180deg);
      }
    }
  }
  .swiper-slide {
    .article {
      width: 100%;
      &__image-wrapper {
        width: 100%;
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .swiper-slide {
      .article {
        display: flex;
        flex-direction: column;
        &__image-wrapper {
          margin-bottom: 30px;
        }
        &__title-wrapper {
          width: 100%;
        }
        &__content {
          width: 100%;
          margin: 0;
          h3 {
            margin: 20px 0 20px 0;
          }
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    && {
      padding: 70px 0;
    }
    .article-slider {
      &__title-wrapper {
        flex-flow: wrap;
        justify-content: flex-end;
      }
      &__buttons {
        gap: 40px;
      }
      &__title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
`;
