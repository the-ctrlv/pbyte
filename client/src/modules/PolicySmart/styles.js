import styled from 'styled-components';

import { breakpoints, colors, mqMax } from 'shared';

export const StyledPolicySmartContent = styled.section`
  background-color: ${colors.sectionGrey};
  padding: 50px 0;
  .content-container {
    img {
      width: 90%;
      height: auto;
      display: block;
      margin: 0 auto;
      @media ${mqMax(breakpoints.md)} {
        width: 100%;
      }
    }
  }
`;
