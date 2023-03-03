import Logo from '../components/Logo';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

function Footer(className) {
  return (
    <footer className={classNames(styles.default, className)}>
      <Logo className={styles.logo} />
      <p>&copy;2020 Kasa. All rights reserved</p>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
