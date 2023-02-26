import { ReactComponent as LogoSvg } from '../assets/images/logo.svg'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Logo.module.scss'

function Logo({ className }) {
  const extClassName = classNames(styles.default, className)

  return <LogoSvg className={extClassName} />
}

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
