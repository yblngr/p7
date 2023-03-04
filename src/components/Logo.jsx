import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ReactComponent as LogoSvg } from './Logo.svg';
import styles from './Logo.module.scss';

function Logo({ className }) {
  return <LogoSvg className={classNames(styles.default, className)} />;
}

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
