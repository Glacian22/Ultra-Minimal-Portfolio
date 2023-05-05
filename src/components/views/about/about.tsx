import React from 'react'
import './style.css'

let About = () => {

  const text = {
    name: 'Abram Thau',
    species: 'Human',
    occ: 'Software Developer, writer',
    background: `Fullstack Dev and Writer, specializing in modern JS, Typescript, React, Redux, Node, Relational and Nonrelational DBs, DevOps, CI/CD pipelines, and most importantly: thoughtfully written maintainable code paired solid testing.`,
    tech: 'SQL, MongoDB, Firebase, IndexedDB, Redis, AWS, GCP, REST APIs, Tailwind, Bootstrap, Material UI, GraphQL, Cypress, Playwright, Webpack, Babel, Vite, Github, Gitlab, and more.',
  }

  return (
    <div className='content' id='about'>
      <div>
        <p>
          <span className='about-headers'>Name:</span>
          <span className='about-content' id='name'>{text.name}</span>
        </p>
        <p>
          <span className='about-headers'>Species:</span>
          <span className='about-content' id='species'>{text.species}</span>
        </p>
        <p>
          <span className='about-headers'>Occupation:</span>
          <span className='about-content' id='occ'>{text.occ}</span>
        </p>
        <p>
          <span className='about-headers'>Background:</span>
          <span className='about-content' id='background'>{text.background}</span>
        </p>
        <p>
          <span className='about-headers'>Other Technologies:</span>
          <span className='about-content' id='tech'>{text.tech}</span>
        </p>
      </div>
    </div>
  )
}

export default About;