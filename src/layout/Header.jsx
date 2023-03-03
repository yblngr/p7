import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Logo from '../components/Logo';

function Header(className) {
  return (
    <header className={classNames(styles.default, className)}>
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

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
