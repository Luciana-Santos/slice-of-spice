import { TitlesStyled } from '../UI/Titles.styled';
import { MenuGrid, MenuImage, MenuStyled } from './Menu.styled';
import { content } from '../../content';
import MenuCards from '../UI/MenuCards';

const Menu = () => {
  return (
    <MenuStyled id="menu">
      <TitlesStyled size="40px" center="center">
        Menu
      </TitlesStyled>

      <MenuGrid gap="20px" columns="repeat(3, 1fr)">
        {content.menuSection.topOptions.map((item) => {
          return <MenuCards key={item.id} data={item} />;
        })}

        <MenuImage>
          <img
            src="https://raw.githubusercontent.com/Luciana-Santos/slice-of-spice/main/public/assets/img/menu-bg.jpg"
            alt="Menu Options Image"
          />
        </MenuImage>

        {content.menuSection.bottomOptions.map((item) => {
          return <MenuCards key={item.id} data={item} />;
        })}
      </MenuGrid>
    </MenuStyled>
  );
};
export default Menu;
