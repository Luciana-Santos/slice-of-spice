import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.mdPurple};
  padding-block: 10px;
  text-align: center;

  p {
    color: ${({ theme }) => theme.colors.vltBrow};
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.ltOrange};
  }
`;
