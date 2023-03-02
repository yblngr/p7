import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import homeBanner from '../assets/images/home.webp';

function Home() {
  const [rentals, setRentals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/rentals.json')
      .then((response) => response.json())
      .then((response) => setRentals(response))
      .catch((error) => {
        console.error('Error fetching data :\n', error.message);
        navigate('/404', { replace: true });
      });
  }, []);

  return (
    <main className="home">
      <Banner className="banner" image={homeBanner} text="Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs" />
      <div className="cardset">
        {rentals.map(({ id, title, cover }) => (
          <Card className="card" key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  );
}

export default Home;
