import { ReactComponent as StarSvg } from '../assets/images/star.svg';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Star.module.scss';

function Star({ off, className }) {
  return <StarSvg className={classNames.bind(styles)(styles.default, { off: off }, className)} />;
}

Star.propTypes = {
  off: PropTypes.bool,
  className: PropTypes.string,
};

export default Star;
