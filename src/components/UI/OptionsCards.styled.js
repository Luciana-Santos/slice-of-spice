import styled from 'styled-components';

export const OptionsCardsStyled = styled.div`
  display: grid;
  place-content: center;
  background: ${({ img, theme }) =>
    img ? `url('${img}')` : theme.colors.vltBrow};
  background-size: cover;
  background-position: center;
  padding-block: 30px;
  padding-inline: 30px;
  height: 255px;
`;
