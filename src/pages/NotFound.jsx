import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';

function NotFound(className) {
  return (
    <main className={classNames(styles.default, className)}>
      <div>404</div>
      <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
      <div className={styles.link}>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    </main>
  );
}

NotFound.propTypes = {
  className: PropTypes.string,
};

export default NotFound;
