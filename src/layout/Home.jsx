import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <main className="home">
      <div className="container">
        <Banner />
        <div>
          <Card />
        </div>
      </div>
    </main>
  )
}

export default Home
