import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import aboutBanner from '../assets/images/about.webp'
import about from '../assets/data/about.json'

function About() {
  return (
    <main className="about">
      <Banner className="banner" image={aboutBanner} />
      {about.map(({ title, content }, index) => (
        <div className="collapse" key={`about-${index}`}>
          <Collapse title={title}>
            <p>{content}</p>
          </Collapse>
        </div>
      ))}
    </main>
  )
}

export default About
