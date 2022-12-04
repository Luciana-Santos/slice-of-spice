import { Container } from '../../GlobalStyles';
import { ParagraphStyled } from '../UI/Paragraph.styled';
import { FooterStyled } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <ParagraphStyled>
          Coded by:{' '}
          <a href="https://github.com/Luciana-Santos">Luciana Santos</a>
        </ParagraphStyled>
      </Container>
    </FooterStyled>
  );
};
export default Footer;
