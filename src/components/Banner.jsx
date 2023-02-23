import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Banner.module.scss'

function Banner({ image, text, className }) {
  const extClassName = classNames(styles.default, className)

  return (
    <figure className={extClassName}>
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
