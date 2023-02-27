import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutBanner from '../assets/images/about.webp';
import about from '../assets/data/about.json';

function About() {
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
