import Logo from '../components/Logo';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.default}>
      <Logo className={styles.logo} />
      <p>&copy;2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
