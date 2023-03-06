import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as ChevronSvg } from './Chevron.svg';
import styles from './Chevron.module.scss';

function Chevron({ left, up, right, className }) {
  let orientation = 'none';
  if (left && !up && !right) orientation = 'rotate(90deg)';
  if (!left && up && !right) orientation = 'rotate(-180deg)';
  if (!left && !up && right) orientation = 'rotate(-90deg)';

  return (
    <div className={classNames(styles.default, className)} style={{ transform: orientation }}>
      <ChevronSvg className={styles.svg} />
    </div>
  );
}

Chevron.propTypes = {
  left: PropTypes.bool,
  up: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string,
};

export default Chevron;
