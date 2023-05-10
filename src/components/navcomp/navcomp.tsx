import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function NavComp (props: any) {
  return (
    <NavLink to={`/${props.destination}`} className='w3-animate-left nav-comp'>
      {props.destination}
    </NavLink>
  )
}
