import styled from 'styled-components';
import { Grid } from '../../GlobalStyles';
import { TitlesStyled } from '../UI/Titles.styled';

export const AboutUsStyled = styled(Grid)`
  display: grid;
  gap: 40px;
  padding-block: 60px;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.medium}px) {
    grid-template-columns: ${({ columns }) => (columns ? columns : '1fr')};
  }
`;

export const TitleStyledNew = styled(TitlesStyled)`
  font-size: 16px;
`;
