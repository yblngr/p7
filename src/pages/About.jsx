import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutBanner from '../assets/about.webp';
import styles from './About.module.scss';

function About() {
  const [about, setAbout] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/about.json')
      .then((response) => response.json())
      .then((response) => setAbout(response))
      .catch((error) => {
        console.error('Error fetching data :\n', error.message);
        navigate('/404', { replace: true });
      });
  }, []);

  return (
    <main className={styles.default}>
      <Banner className={styles.banner} image={aboutBanner} />
      {about.map(({ label, article }, index) => (
        <Collapse className={styles.collapse} key={`about-${index}`} label={label}>
          <p>{article}</p>
        </Collapse>
      ))}
    </main>
  );
}

export default About;
