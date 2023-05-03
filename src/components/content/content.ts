import React, { useEffect, useState, Fragment } from 'react'
import './style.css'

const Content = (props: any) => {
  const [content, setContent] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setContent(props.children)
    }, 500)
  }, [])

  return (
    content
  )
}

export default Content;