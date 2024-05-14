import { colors } from 'shared';
import styled from 'styled-components';

export const StyledSocialList = styled.div`
  && {
    display: flex;
    justify-content: space-between;
  }
  a {
    height: 45px;
    width: 45px;
    border: 1px solid ${colors.light};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
