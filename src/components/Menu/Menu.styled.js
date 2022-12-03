import styled from 'styled-components';
import { Grid } from '../../GlobalStyles';

export const MenuStyled = styled.section`
  padding-block: 60px;
`;

export const MenuGrid = styled(Grid)`
  grid-template-columns: ${({ columns }) => columns};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxWidth.small}px) {
    grid-template-columns: 1fr;
  }
`;

export const MenuImage = styled(Grid)`
  grid-column: 1 / -1;

  img {
    height: 250px;
    object-fit: cover;
    object-position: center;
  }
`;
