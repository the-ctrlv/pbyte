import { breakpoints, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledPhones = styled.div`
  position: relative;
  width: calc(100% - 84px);
  margin: 0 auto;
  padding: 200px 0;
  .container {
    display: flex;
    justify-content: center;
    min-height: 700px;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -45%);
      height: 150%;
      width: auto;
      &.expanded {
        transform: translate(-50%, 05%);
        height: auto;
        width: 70%;
      }
    }
  }
  .phones-wrapper {
    text-align: center;
    max-height: 1050px;
    max-width: 80vw;
    margin: 0 auto;
    img {
      position: relative;
      max-width: 950px;
      z-index: 1;
      top: auto;
      left: auto;
      width: 70%;
      height: auto;
      margin: 0 auto;
      &:first-child {
        transform: translateY(-20%);
      }
      &:last-child {
        transform: translateY(-50%);
      }
    }
  }

  @media ${mqMax(breakpoints.lg)} {
    width: calc(100% - 20px);
    padding: 100px 0;

    .container {
      min-height: 70vh;
      img {
        height: 120%;
      }
    }
    .phones-wrapper {
      img {
        width: 100%;
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    &.expanded {
      padding-bottom: 0;
    }
    .phones-wrapper {
      max-height: 800px;
      max-width: none;
    }
  }
`;
