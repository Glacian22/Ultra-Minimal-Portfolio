import React, { useState, useEffect } from 'react'
import './style.css'

function Nav (props: any) {
  const [elements, setElements] = useState(Array<any>)

  useEffect(() => {
    let count = 0
    let timer = setInterval(() => {
      setElements(props.children.slice(0, count + 1))
      count++
      if (count >= props.children.length) {
        clearInterval(timer)
      }
    }, 100)
  }, [props.children])

  return (
    <div id='nav-wrap'>
      <nav className='nav'>
        {elements}
      </nav>
    </div>
  )
}

export default Nav
