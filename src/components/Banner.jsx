import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

function Banner({ image, text, className }) {
  return (
    <figure className={classNames(styles.default, className)}>
      <div>
        <img src={image} alt="Banner" />
      </div>
      {text && <figcaption>{text}</figcaption>}
    </figure>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
}

export default Banner
