import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ id, title, cover }) {
  return (
    <Link className="card" to={`/accommodation/${id}`}>
      <div className="mask">
        <img src={cover} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default Card
