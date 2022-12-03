import styled from 'styled-components';

export const TitlesStyled = styled.h1`
  color: ${({ theme }) => theme.colors.vltBrow};
  font-family: ${({ theme }) => theme.fonts.titles};
  font-size: clamp(2rem, 6vw, 4.5rem);
  margin-bottom: clamp(40px, 6vw, 60px);

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 1px;
    background: ${({ theme }) => theme.colors.vltBrow};
    margin-top: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.medium}px) {
  }
`;
