import photo from '../assets/banner.png'

function Banner() {
  return (
    <figure className="banner">
      <img src={photo} alt="image logo" width="600" />
      <figcaption>Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs</figcaption>
    </figure>
  )
}

export default Banner
