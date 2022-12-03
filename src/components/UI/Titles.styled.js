import styled from 'styled-components';

export const TitlesStyled = styled.h1`
  color: ${({ color, theme }) => (color ? color : theme.colors.mdPurple)};
  font-family: ${({ theme }) => theme.fonts.titles};
  font-size: ${({ size }) => (size ? size : 'clamp(2rem, 6vw, 4.5rem)')};
  margin-bottom: clamp(40px, 6vw, 60px);

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    margin-top: 10px;
    background: ${({ color, theme }) =>
      color ? color : theme.colors.mdPurple};
  }
`;
