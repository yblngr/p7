import bannerImage from '../assets/banner.png'

function Banner() {
  return (
    <figure className="banner">
      <div className="mask">
        <img src={bannerImage} alt="Bannière" />
      </div>
      <figcaption>Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs</figcaption>
    </figure>
  )
}

export default Banner
