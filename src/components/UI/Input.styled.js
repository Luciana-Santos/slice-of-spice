import styled from 'styled-components';

export const InputStyled = styled.label`
  color: ${({ theme }) => theme.colors.body};
  display: grid;
  gap: 10px;

  input {
    background: ${({ theme }) => theme.colors.vltBrow};
    border: none;
    font-size: 16px;
    padding-block: 10px;
    padding-inline: 8px;
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
