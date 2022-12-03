import styled from 'styled-components';

export const ParagraphStyled = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.body};
  text-align: ${({ center }) => (center ? center : '')};
`;
