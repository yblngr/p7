import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import aboutBanner from '../assets/about-banner.png'
import about from '../assets/about.json'

function About() {
  return (
    <main className="about">
      <Banner image={aboutBanner} />
      {about.map(({ title, content }, index) => (
        <Collapse key={`about-${index}`} title={title}>
          <p>{content}</p>
        </Collapse>
      ))}
    </main>
  )
}

export default About
