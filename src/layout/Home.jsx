import Banner from '../components/Banner'
import Card from '../components/Card'
import homeBanner from '../assets/home-banner.png'
import accommodations from '../assets/accommodations.json'

function Home() {
  return (
    <main className="home">
      <Banner image={homeBanner} text="Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs" />
      <div className="cardset">
        {accommodations.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  )
}

export default Home
