import styled from 'styled-components';

export const HeaderStyled = styled.header`
  height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-block: 20px;
  gap: 100px;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.medium}px) {
    height: 80vh;
    gap: 200px;
  }
`;

export const HeaderStyledBg = styled.div`
  background: url('./assets/img/hero-img.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.medium}px) {
    height: 80vh;
  }
`;

export const MenuIcon = styled.div`
  color: ${({ theme }) => theme.colors.mdPink};
  font-size: 30px;
  cursor: pointer;
  position: fixed;
  right: 10px;
  top: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoints.minWidth.medium}px) {
    display: none;
  }
`;
