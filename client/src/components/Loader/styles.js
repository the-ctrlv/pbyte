import styled from 'styled-components';

export const StyledLoader = styled.div`
  .loader {
    &__container {
      display: flex;
      &__circle {
        background: linear-gradient(
          180deg,
          #44e0e0 -18.7%,
          rgba(13, 13, 13, 0) 100%
        );
        mix-blend-mode: hard-light;
        box-shadow: inset 20px 50px 100px #7dffff;
        width: 70px;
        height: 70px;
        display: block;
        border-radius: 100%;
        opacity: 0;
        &--violet {
          margin-right: -10px;
          background: linear-gradient(
            180deg,
            #9237fc -18.7%,
            rgba(13, 13, 13, 0) 100%
          );
          box-shadow: inset 20px 50px 100px #c99aff;
        }
      }
    }
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
`;
