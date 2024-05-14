import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledWorks = styled.section`
  p {
    text-align: center;
    padding: 0 0 100px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 18px;
  }
  .content-container {
    padding: 0 0 100px;
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    a {
      width: 48%;
      margin-bottom: 5%;
      img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
      .text {
        width: 100%;
        display: flex;
        justify-content: space-between;
        span {
          font-family: 'Montserrat';
          font-weight: 600;
          font-size: 14px;
          display: block;
          text-transform: uppercase;
          color: ${colors.grey};
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    .content-container {
      a {
        width: 100%;
        .text {
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
`;
