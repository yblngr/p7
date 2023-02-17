import Banner from '../components/Banner'
import Card from '../components/Card'
import accommodations from '../assets/logements.json'

function Home() {
  return (
    <main className="home">
      <Banner />
      <div className="cardset">
        {accommodations.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  )
}

export default Home
