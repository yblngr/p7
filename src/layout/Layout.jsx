import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <div className={styles.placeholder}></div>
      <Footer />
    </div>
  );
}

export default Layout;
