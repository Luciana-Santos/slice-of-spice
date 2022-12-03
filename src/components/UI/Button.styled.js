import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.colors.mdPink};
  border: none;
  padding-block: 8px;
  padding-inline: 12px;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  max-width: max-content;
`;

export const ButtonStyledLink = styled(ButtonStyled)``;
