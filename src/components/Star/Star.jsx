import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { ReactComponent as StarSvg } from './Star.svg';
import styles from './Star.module.scss';

function Star({ off }) {
  return (
    <div className={styles.default}>
      <StarSvg className={classNames.bind(styles)(styles.svg, { off: off })} />
    </div>
  );
}

Star.propTypes = {
  off: PropTypes.bool,
};

export default Star;
