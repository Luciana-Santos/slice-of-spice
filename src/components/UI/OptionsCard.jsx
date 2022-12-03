import { OptionsCardsStyled } from './OptionsCards.styled';
import { ParagraphStyled } from './Paragraph.styled';
import { TitlesStyled } from './Titles.styled';

const OptionsCard = ({ data }) => {
  return (
    <OptionsCardsStyled img={data?.img}>
      {data?.title && data?.text ? (
        <>
          <TitlesStyled
            marginBottom="30px"
            as="h4"
            center="center"
            textTransform="uppercase"
            size="16px"
          >
            {data?.title}
          </TitlesStyled>
          <ParagraphStyled center="center">{data?.text}</ParagraphStyled>
        </>
      ) : null}
    </OptionsCardsStyled>
  );
};
export default OptionsCard;
