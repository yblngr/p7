import PropTypes from 'prop-types';

import Star from '../components/Star';
import styles from './Rating.module.scss';

function Rating({ value }) {
  const numValue = parseInt(value);
  const starsArray = [];
  for (let i = 1; i <= 5; i++) starsArray.push(i > numValue);

  return (
    <div className={styles.default}>
      {starsArray.map((off, index) => (
        <Star key={`star-${index}`} off={off} />
      ))}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Rating;
