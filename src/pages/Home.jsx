import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Banner from '../components/Banner';
import Card from '../components/Card';
import homeBanner from '../assets/home.webp';
import styles from './Home.module.scss';

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
    <main className={styles.default}>
      <Banner className={styles.banner} image={homeBanner} text="Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs" />
      <div className={styles.cardset}>
        {rentals.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  );
}

export default Home;
