import { breakpoints, colors, mqMax } from 'shared';
import styled from 'styled-components';

export const StyledClients = styled.section`
  padding: 130px 0 150px;
  .clients {
    text-align: center;
    &__pre-title {
      font-size: 12px;
      font-family: 'Montserrat';
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      &::after {
        content: '';
        display: block;
        position: relative;
        width: 1px;
        height: 36px;
        margin: 7px auto 25px;
        background-color: ${colors.grey};
      }
    }
    &__title {
      font-size: 70px;
      margin: 0 0 85px 0;
    }
    &__logos-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      max-width: 800px;
      margin: 0 auto;
      img {
        width: calc((100% / 3) - 25px);
        height: auto;
        aspect-ratio: 16/9;
        object-fit: contain;
        margin-bottom: 50px;
        &:last-child,
        &:nth-child(8),
        &:nth-child(7) {
          margin-bottom: 0;
        }
      }
    }
  }
  @media ${mqMax(breakpoints.xl)} {
    .clients {
      &__logos-wrapper {
        img {
          width: calc((100% / 4) - 25px);
        }
      }
    }
  }
  @media ${mqMax(breakpoints.md)} {
    padding: 50px 0 60px;
    .clients {
      &__pre-title {
        font-size: 12px;
        &::after {
          margin: 15px auto 20px;
        }
      }
      &__title {
        font-size: 34px;
        margin-bottom: 50px;
      }
      &__logos-wrapper {
        img {
          width: calc((100% / 3) - 15px);
          margin-bottom: 15px;
        }
      }
    }
  }
`;
