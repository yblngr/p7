import Banner from '../components/Banner'
import Card from '../components/Card'
import homeBanner from '../assets/images/home-banner.png'
import rentals from '../assets/data/rentals.json'

function Home() {
  return (
    <main className="home">
      <Banner className="banner" image={homeBanner} text="Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs" />
      <div className="cardset">
        {rentals.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  )
}

export default Home
