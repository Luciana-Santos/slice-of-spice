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

export const InputStyled = styled.label`
  color: ${({ theme }) => theme.colors.body};
  display: grid;
  gap: 10px;
  position: relative;

  input {
    background: ${({ theme }) => theme.colors.vltBrow};
    border: none;
    font-size: 16px;
    padding-block: 10px;
    padding-inline: 8px;
    border-radius: 4px;
  }
`;

export const FieldsetStyled = styled.fieldset`
  border: none;
  display: grid;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.xsmall}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ReservationConfirmed = styled.div`
  display: grid;
  gap: 30px;
`;

export const ReservationConfirmedTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.titles};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.mdPink};
`;

export const ReservationInfo = styled.ul`
  display: grid;
  gap: 6px;

  li {
    font-size: 18px;
  }

  li span {
    font-weight: 600;
    font-size: 16px;
  }
`;
