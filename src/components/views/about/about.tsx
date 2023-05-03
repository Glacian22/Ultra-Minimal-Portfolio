import React, { useEffect, useState, useRef } from 'react'
import './style.css'

let About = () => {

  const [dispText, setDispText] = useState({ 'name': '', 'species': '', 'occ': '', 'background': '', 'tech': '' })

  const text = [
    ['name', ' Abram Thau'],
    ['species', ' Human'],
    ['occ', ' Software Developer, writer'],
    ['background', ` Fullstack Dev and Writer, specializing in modern JS, Typescript, React, Node, Relational and Nonrelational DBs, DevOps, CI/CD pipelines, and most importantly: thoughtfully written maintainable code paired solid testing.`],
    ['tech', ' SQL, MongoDB, Firebase, IndexedDB, Redis, AWS, GCP, REST APIs, GraphQL, Cypress, Playwright, Webpack, Babel, Vite, Github, Gitlab, and more.']
  ]

  let delay = 12;

  //  update 1 letter per function call, 
  //  set time out to call funtion again if total not met

  useEffect(() => {
    const showText = (row = 0) => {
      const key = text[row][0];
      let newRow = row;

      setDispText((dTxt) => {
        // if done with this row, don't update state and check if there are more rows. If so, increment row if more rows available, or set to -1 to indicate all done.
        // else update state with additional char, run again
        if (dTxt[key].length === text[row][1].length) {
          newRow = row < text.length - 1 ? row + 1 : -1;
          delay = 1000;
          return dTxt;
        }
        else {
          return { ...dTxt, [key]: text[row][1].substr(0, dTxt[key].length + 1) }
        }
      })

      // Logic to decide if to call showText again, ie more text to render
      if (newRow !== -1) {
        setTimeout(() => {
          showText(newRow)
          delay = 12;
        }, delay)
      }
    }

    setTimeout(() => showText(), 1250)
  }, [delay])


  return (
    <div className='content' id='about'>
      <div>
        <p><span className='about-headers'>Name:</span> {dispText.name}</p>
        <p><span className='about-headers'>Species:</span> {dispText.species}</p>
        <p><span className='about-headers'>Occupation:</span> {dispText.occ}</p>
        <p><span className='about-headers'>Background:</span> {dispText.background}</p>
        <p><span className='about-headers'>Other Technologies:</span> {dispText.tech}</p>
      </div>
    </div>
  )
}

export default About;