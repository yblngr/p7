import imagecard from '../assets/photo.png'

function Card() {
  return (
    <div className="card">
      <img src={imagecard} alt="photo" />
      <p>Titre de la location</p>
    </div>
  )
}

export default Card
