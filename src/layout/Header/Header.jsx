import { NavLink } from 'react-router-dom';

import Logo from '../../components/Logo/Logo';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.default}>
      <Logo className={styles.logo} />
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
