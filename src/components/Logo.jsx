import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Logo.module.scss'

function Logo({ className }) {
  const extClassName = classNames(styles.default, className)

  return <div className={extClassName}></div>
}

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
