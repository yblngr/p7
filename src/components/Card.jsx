import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

function Card({ id, title, cover, className }) {
  return (
    <Link className={classNames(styles.default, className)} to={`/rental/${id}`}>
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
  className: PropTypes.string,
};

export default Card;
