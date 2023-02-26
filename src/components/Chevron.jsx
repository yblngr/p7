import { ReactComponent as ChevronSvg } from '../assets/images/chevron.svg'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Chevron.module.scss'

function Chevron({ className, left, up, right }) {
  let orientation = 'none'
  if (left && !up && !right) orientation = 'rotate(90deg)'
  if (!left && up && !right) orientation = 'rotate(180deg)'
  if (!left && !up && right) orientation = 'rotate(270deg)'

  return <ChevronSvg className={classNames(styles.default, className)} style={{ transform: orientation }} />
}

Chevron.propTypes = {
  className: PropTypes.string,
  left: PropTypes.bool,
  up: PropTypes.bool,
  right: PropTypes.bool,
}

export default Chevron
