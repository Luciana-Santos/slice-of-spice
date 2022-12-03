import { content } from '../../content';
import { MenuStyled } from './Menu.styled';

const Menu = ({ isMenuOpen }) => {
  return (
    <MenuStyled isMenuOpen={isMenuOpen}>
      <ul>
        {content.menuList.map(({ id, name, url }) => {
          return (
            <li key={id}>
              <a href={url}>{name}</a>
            </li>
          );
        })}
      </ul>
    </MenuStyled>
  );
};
export default Menu;
