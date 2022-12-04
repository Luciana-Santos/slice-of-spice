import { content } from '../../content';
import { MenuStyled } from './Menu.styled';

const Menu = ({ isMenuOpen, onClickHandler }) => {
  return (
    <MenuStyled isMenuOpen={isMenuOpen}>
      <ul>
        {content.menuList.map(({ id, name, url }) => {
          return (
            <li key={id} onClick={onClickHandler}>
              <a href={url}>{name}</a>
            </li>
          );
        })}
      </ul>
    </MenuStyled>
  );
};
export default Menu;
