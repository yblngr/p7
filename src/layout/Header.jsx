import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';

function Header() {
  return (
    <header>
      <Logo className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">&Agrave;&nbsp;propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
