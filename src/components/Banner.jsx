import PropTypes from 'prop-types'

function Banner({ image, text }) {
  return (
    <figure className="banner">
      <div className="mask">
        <img src={image} alt="Bannière" />
      </div>
      <figcaption>{text}</figcaption>
    </figure>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default Banner
