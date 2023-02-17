import Banner from '../components/Banner'
import Card from '../components/Card'
import accommodations from '../assets/logements.json'

function Home() {
  console.table(accommodations)
  return (
    <main className="home">
      <div className="sized">
        <Banner />
        <div className="cardset">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}

export default Home
