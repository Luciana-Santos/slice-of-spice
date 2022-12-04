import { useState } from 'react';
import { CgMenuGridO, CgClose } from 'react-icons/cg';
import { Container, Flex } from '../../GlobalStyles';
import { ButtonStyled } from '../UI/Button.styled';
import { TitlesStyled } from '../UI/Titles.styled';
import { HeaderStyledBg, HeaderStyled, MenuIcon } from './Header.styled';
import Menu from './Menu';

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const isMenuOpenHandler = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <HeaderStyledBg />
      <Container>
        <HeaderStyled>
          <Flex alignSelf="end">
            <MenuIcon onClick={isMenuOpenHandler}>
              {isMenuOpen ? <CgClose /> : <CgMenuGridO />}
            </MenuIcon>
          </Flex>

          <Flex direction="column">
            <TitlesStyled color="#E8DDC9">Slice of Spice</TitlesStyled>
            <ButtonStyled as="a" href="/">
              Reservations
            </ButtonStyled>
          </Flex>
        </HeaderStyled>
      </Container>
      <Menu onClickHandler={isMenuOpenHandler} isMenuOpen={isMenuOpen} />
    </>
  );
};
export default Header;
