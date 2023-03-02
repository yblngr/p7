import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutBanner from '../assets/images/about.webp';

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
    <main className="about">
      <Banner className="banner" image={aboutBanner} />
      {about.map(({ label, article }, index) => (
        <Collapse className="collapse" key={`about-${index}`} label={label}>
          <p>{article}</p>
        </Collapse>
      ))}
    </main>
  );
}

export default About;
