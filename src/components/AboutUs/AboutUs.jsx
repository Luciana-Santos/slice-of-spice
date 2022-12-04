import { AboutUsStyled } from './AboutUs.styled';
import { Container, Grid } from '../../GlobalStyles';
import { TitlesStyled } from '../UI/Titles.styled';
import { ParagraphStyled } from '../UI/Paragraph.styled';

const AboutUs = () => {
  return (
    <Container id="about">
      <AboutUsStyled columns="340px 1fr">
        <div>
          <TitlesStyled as="h2" size="40px">
            About Us
          </TitlesStyled>

          <ParagraphStyled>
            Cheeseburger nisi consectetur non consectetur. Ea mollit cheddar
            cheese chicken nuggets magna ut nulla. Sed laborum secret sauce
            flame-broiled. Quis nisi aute magna veniam ut chicken wrap tomato
            sauteed mushrooms.
          </ParagraphStyled>
        </div>

        <Grid gap="20px">
          <ParagraphStyled>
            Cheeseburger nisi consectetur non consectetur. Ea mollit cheddar
            cheese chicken nuggets magna ut nulla. Sed laborum secret sauce
            flame-broiled. Quis nisi aute magna veniam ut chicken wrap tomato
            sauteed mushrooms.
          </ParagraphStyled>

          <div>
            <img
              src="https://raw.githubusercontent.com/Luciana-Santos/slice-of-spice/main/public/assets/img/about_us-img.jpg"
              alt="About us image"
            />
          </div>
        </Grid>
      </AboutUsStyled>
    </Container>
  );
};
export default AboutUs;
