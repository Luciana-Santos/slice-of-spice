import { useState } from 'react';
import { CgMenuGridO, CgClose } from 'react-icons/cg';
import { Container, Flex } from '../../GlobalStyles';
import { ButtonStyledLink } from '../UI/Button.styled';
import { Titles } from '../UI/Titles';
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
            <Titles>Slice of Spice</Titles>
            <ButtonStyledLink as="a" href="/">
              Reservations
            </ButtonStyledLink>
          </Flex>
        </HeaderStyled>
      </Container>
      <Menu onClickHandler={isMenuOpenHandler} isMenuOpen={isMenuOpen} />
    </>
  );
};
export default Header;
