import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledArticleTopic = styled.section`
  .article {
    padding-bottom: 100px;
    h2 {
      padding-top: 160px;
      max-width: 650px;
      margin-bottom: 50px;
      font-size: 40px;
      line-height: 45px;
    }
    img {
      width: 100%;
      display: block;
      height: auto;
      margin-bottom: 50px;
    }
    &__content-wrapper {
      padding: 0 0 36px 35vw;
      border-bottom: 1px solid ${colors.lineColor};
      > p:first-child {
        margin-bottom: 50px;
      }
    }
    &__text-content {
      padding-bottom: 60px;
      margin-bottom: 35px;
      border-bottom: 1px solid ${colors.lightGrey};
      li {
        list-style: none;
        &:not(:last-child) {
          margin-bottom: 40px;
        }
        h4 {
          margin: 0 0 20px 0;
        }
        p {
          text-align: justify;
        }
      }
    }
    &__tags {
      display: flex;
      flex-flow: wrap;
      gap: 10px;
      padding: 0;
      margin: 0;
      li {
        white-space: nowrap;
        font-family: 'Montserrat';
        font-size: 16px;
        display: inline-block;
        padding: 6px 16px;
        border: 1px solid ${colors.lightGrey};
        &.active {
          background-color: ${colors.dark};
          color: ${colors.light};
        }
      }
    }
  }
  @media ${mqMax(breakpoints.xxl)} {
    .article {
      &__content-wrapper {
        padding: 0 0 36px 20vw;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .article {
      padding-bottom: 60px;
      h2 {
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 30px;
      }
      &__text-content {
        li {
          p {
            text-align: start;
          }
        }
      }
      &__content-wrapper {
        padding: 0 0 36px 0;
      }
    }
  }
`;
