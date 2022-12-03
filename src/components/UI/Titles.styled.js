import styled from 'styled-components';

export const TitlesStyled = styled.h1`
  color: ${({ color, theme }) => (color ? color : theme.colors.mdPurple)};
  font-family: ${({ theme }) => theme.fonts.titles};
  font-size: ${({ size }) => (size ? size : 'clamp(2rem, 6vw, 4.5rem)')};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : 'clamp(40px, 6vw, 60px)'};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : 'capitalized'};
  text-align: ${({ center }) => (center ? center : '')};

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    margin-inline: ${({ center }) => (center ? 'auto' : '')};
    margin-top: 10px;
    background: ${({ color, theme }) =>
      color ? color : theme.colors.mdPurple};
  }
`;
