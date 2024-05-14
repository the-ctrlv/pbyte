import styled from 'styled-components';

import { breakpoints, mqMax, mqMin } from 'shared';

export const StyledArticleList = styled.section`
  padding: 100px 0 150px;
  .articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    .select-wrapper {
      align-self: flex-end;
      position: relative;
      z-index: 1090;
    }
    .select {
      align-self: flex-end;
      margin-bottom: 60px;
    }
    &__list {
      width: 100%;
      .article {
        padding-bottom: 45px;
        margin-bottom: 50px;
        border-bottom: 1px solid rgba(250, 247, 245, 0.2);
      }
    }
    &__main-wrapper {
      flex-flow: wrap;
      width: 100%;
      .article {
        margin-bottom: 30px;
      }
    }
    @media ${mqMin(breakpoints.xxl)} {
      &__main-wrapper {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 80px;
        margin-bottom: 45px;
        border-bottom: 1px solid rgba(250, 247, 245, 0.2);
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    padding: 50px 0 100px;
    .articles {
      &__list {
        .article {
          margin-bottom: 40px;
          padding-bottom: 0;
          border-bottom: none;
        }
      }
      .select {
        width: 100%;
      }
      .select-wrapper {
        width: 100%;
      }
    }
  }
`;
