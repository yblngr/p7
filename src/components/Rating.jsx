import Star from '../components/Star';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Rating.module.scss';

function Rating({ value, className }) {
  const numValue = parseInt(value);
  const starsArray = [];
  for (let i = 1; i <= 5; i++) starsArray.push(i > numValue);

  return (
    <div className={classNames(styles.default, className)}>
      {starsArray.map((off, index) => (
        <Star className={styles.star} key={`star-${index}`} off={off} />
      ))}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

export default Rating;
