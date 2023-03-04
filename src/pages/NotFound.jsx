import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <main className={styles.default}>
      <div>404</div>
      <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </main>
  );
}

export default NotFound;
