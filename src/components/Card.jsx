import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

function Card({ id, title, cover }) {
  return (
    <Link className={styles.default} to={`/rental/${id}`}>
      <div>
        <img src={cover} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
