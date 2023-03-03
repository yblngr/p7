import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import homeBanner from '../assets/images/home.webp';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';

function Home(className) {
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
    <main className={classNames(styles.default, className)}>
      <Banner className={styles.banner} image={homeBanner} text="Chez&nbsp;vous, partout&nbsp;et&nbsp;ailleurs" />
      <div className={styles.cardset}>
        {rentals.map(({ id, title, cover }) => (
          <Card className={styles.card} key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

export default Home;
