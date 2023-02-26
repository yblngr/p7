import { ReactComponent as ChevronSvg } from '../assets/images/chevron.svg'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Chevron.module.scss'

function Chevron({ className }) {
  const extClassName = classNames(styles.default, className)

  return <ChevronSvg className={extClassName} />
}

Chevron.propTypes = {
  className: PropTypes.string,
}

export default Chevron
