import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const ReservationsStyled = styled(Container)`
  display: grid;
  padding-block: 60px;
  justify-content: center;
  align-items: center;
  gap: 60px;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.maxWidth.small}px) {
    grid-template-columns: 1fr;
  }
`;
