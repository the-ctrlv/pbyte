import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledDifference = styled.section`
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  &::before {
    top: 65%;
    left: 60%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 250px;
    filter: blur(50px);
  }
  .difference {
    text-align: center;
    padding-top: 150px;
    h3 {
      font-size: 40px;
      margin-bottom: 40px;
      &:last-of-type {
        margin-bottom: 100px;
      }
    }
    .btn-ellipse {
      width: 100%;
      margin: 0 auto;
    }
  }
  @media ${mqMax(breakpoints.md)} {
    &::before {
      top: 20%;
      left: 50%;
    }
    .difference {
      h3 {
        font-size: 20px;
      }
    }
  }
`;
