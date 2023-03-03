import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutBanner from '../assets/images/about.webp';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './About.module.scss';

function About(className) {
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
    <main className={classNames(styles.default, className)}>
      <Banner className={styles.banner} image={aboutBanner} />
      {about.map(({ label, article }, index) => (
        <Collapse className={styles.collapse} key={`about-${index}`} label={label}>
          <p>{article}</p>
        </Collapse>
      ))}
    </main>
  );
}

About.propTypes = {
  className: PropTypes.string,
};

export default About;
