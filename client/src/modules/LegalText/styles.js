import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledLegalDoc = styled.section`
  .content {
    display: flex;
    padding: 170px 8vw 4vw 100px;

    &__left {
      width: 35vw;
      h1 {
        max-width: 95%;
        font-size: 50px;
        line-height: 55px;
        font-weight: 400;
        text-transform: capitalize;
        margin-top: 0;
      }
    }
    &__right {
      width: 50vw;
      padding-left: 3vw;
      h2 {
        font-size: 24px;
        font-family: 'Krona One';
        line-height: 30px;
        font-weight: 400;
      }
      h4 {
        font-size: 20px;
        font-family: 'Krona One';
        line-height: 25px;
        font-weight: 400;
      }

      p {
        font-size: 14px;
        line-height: 22px;
        font-family: 'Montserrat';
        font-weight: 600;
        margin-bottom: 10px;
        a {
          color: #9436fe;
        }
      }
      li {
        font-size: 14px;
        line-height: 22px;
        font-family: 'Montserrat';
        font-weight: 600;
        a {
          color: #9436fe;
        }
      }
    }
    /* }
  @media ${mqMax(breakpoints.xxl)} {
    .content {
      flex-flow: wrap;
      padding: 0 10vw;
      &__left {
        min-width: auto;
        width: 100%;
      }
    }
  } */
    @media ${mqMax(breakpoints.md)} {
      .content {
        padding: 150px 6vw 5vh 4vw;
        h1 {
          font-size: 24px;
          line-height: 34px;
        }
        &__right {
          width: 100%;
        }
      }
    }
  }
`;
