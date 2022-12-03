import { MenuCardsStyled } from './MenuOptions.styled';
import { ParagraphStyled } from './Paragraph.styled';
import { TitlesStyled } from './Titles.styled';

const MenuCards = ({ data }) => {
  return (
    <MenuCardsStyled>
      <TitlesStyled
        key={data.id}
        marginBottom="20px"
        size="18px"
        center="center"
      >
        {data.title}
      </TitlesStyled>
      <ParagraphStyled center="center">{data.text}</ParagraphStyled>
    </MenuCardsStyled>
  );
};
export default MenuCards;
