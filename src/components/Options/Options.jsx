import { Flex, Grid } from '../../GlobalStyles';
import { TitlesStyled } from '../UI/Titles.styled';
import { OptionsStyled } from './Options.styled';
import { content } from '../../content';
import OptionsCard from '../UI/OptionsCard';

const Options = () => {
  return (
    <OptionsStyled>
      <TitlesStyled center="center" as="h2" size="40px">
        Options
      </TitlesStyled>
      <Flex gap="20px">
        {content.optionsSection.map((item) => {
          return <OptionsCard key={item.id} data={item} />;
        })}
      </Flex>
    </OptionsStyled>
  );
};
export default Options;
