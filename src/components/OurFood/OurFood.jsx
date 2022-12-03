import { Container, Flex, Grid } from '../../GlobalStyles';
import { ButtonStyled } from '../UI/Button.styled';
import { ParagraphStyled } from '../UI/Paragraph.styled';
import { TitlesStyled } from '../UI/Titles.styled';
import { OurFoodInfo, OurFoodStyled } from './OurFood.styled';

const OurFood = () => {
  return (
    <Container>
      <OurFoodStyled gap="40px" column="repeat(2,1fr)">
        <Flex gap="15px" justifyContent="center">
          <img
            src="https://raw.githubusercontent.com/Luciana-Santos/slice-of-spice/main/public/assets/img/our_food-img.jpg"
            alt=""
          />
          <img
            src="https://raw.githubusercontent.com/Luciana-Santos/slice-of-spice/main/public/assets/img/our_food-img.jpg"
            alt=""
          />
        </Flex>

        <OurFoodInfo>
          <TitlesStyled size="40px" center="center">
            Our Food
          </TitlesStyled>
          <ParagraphStyled center="center">
            Cheeseburger patty aute honey mustard mollit. Incididunt chicken
            nuggets aliquip ipsum consectetur cupidatat juicy. Honey mustard
            eiusmod flame-broiled aliquip cheddar cheese. Patty double
            cheeseburger tomato chicken nuggets sesame seed bun culpa esse. Ut
            adipisicing anim ullamco proident french fries id onion rings patty.
            Ipsum curly fries do ut consequat est juicy occaecat. Ad nulla dolor
            chicken wrap. Honey mustard aliqua mayo proident.
          </ParagraphStyled>

          <ButtonStyled>Menu</ButtonStyled>
        </OurFoodInfo>
      </OurFoodStyled>
    </Container>
  );
};
export default OurFood;
