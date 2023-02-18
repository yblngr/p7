import React from 'react'
import Banner from '../components/Banner'
import aboutBanner from '../assets/about-banner.png'
import about from '../assets/about.json'

function About() {
  return (
    <main className="about">
      <Banner image={aboutBanner} />
      {about.map(({ title, content }, index) => (
        <React.Fragment key={`about-${index}`}>
          <h1>{title}</h1>
          <p>{content}</p>
        </React.Fragment>
      ))}
    </main>
  )
}

export default About
