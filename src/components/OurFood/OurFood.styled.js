import styled from 'styled-components';
import { Flex, Grid } from '../../GlobalStyles';

export const OurFoodStyled = styled(Grid)`
  padding-block: 60px;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  img {
    height: 630px;
    max-width: 238px;

    &:first-child {
      object-position: 0px 0px;
      object-fit: cover;
      padding-bottom: 60px;
    }

    &:last-child {
      object-position: 0px center;
      object-position: -250px -61px;
      margin-top: 50px;
      object-fit: cover;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.large}px) {
    grid-template-columns: ${({ column }) => (column ? column : '')};
  }
`;

export const OurFoodInfo = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  grid-row: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.large}px) {
    grid-column: 2;
  }
`;
