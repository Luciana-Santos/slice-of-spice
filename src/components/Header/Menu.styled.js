import styled from 'styled-components';

export const MenuStyled = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    column-gap: 30px;
    background-color: ${({ theme }) => theme.colors.mdPurple};
    border-radius: 4px;
    z-index: 9999;

    a {
      padding-block: 12px;
      display: block;
      color: ${({ theme }) => theme.colors.lowOpacityWhite};
      text-transform: uppercase;
      letter-spacing: 0.8px;
      min-width: 100%;

      &:hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.maxWidth.small}px) {
      flex-direction: column;
      width: 80vw;
      height: max-content;
      position: fixed;
      padding-block: 40px;
      top: 60px;
      right: 20px;
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
      visibility: ${({ isMenuOpen }) => (isMenuOpen ? 'visible' : 'hidden')};
    }
  }
`;
