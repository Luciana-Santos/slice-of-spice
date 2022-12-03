import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.body};
  }
  
  img {
    width: 100%;
    display: block;
  }

  h1, h2, h3, h4 {
    line-height: 1;
    font-weight: 400;
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;

export const Container = styled.div`
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'column' : 'row')};
  align-self: ${({ alignSelf }) => (alignSelf ? 'end' : '')};
  flex-wrap: wrap;
  gap: ${({ gap }) => (gap ? gap : '')};

  div {
    flex: 1 1 300px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => (columns ? columns : '1fr')};
  gap: ${({ gap }) => (gap ? gap : '')};
`;

export const theme = {
  colors: {
    white: '#fff',
    lowOpacityWhite: 'hsla(0, 0%, 100%, 0.59)',
    body: 'rgb(71, 71, 71)',
    mdPink: '#B75459',
    mdPurple: '#553A59',
    mdBrow: '#856968',
    ltOrange: '#E8B57C',
    vltBrow: '#E8DDC9',
  },
  fonts: {
    titles: 'Prata',
    body: 'Arial, Helvetica, sans-serif',
  },
  breakpoints: {
    minWidth: {
      small: '640',
      medium: '740',
      large: '960',
      xlarge: '1400',
    },
    maxWidth: {
      xsmall: '639.98',
      small: '739.98',
      medium: '959.98',
      large: '1399.98',
    },
  },
};
