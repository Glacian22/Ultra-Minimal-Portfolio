import React, { useState } from 'react'
import './style.css'

export default function Contact () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className='content' id='contact'>
      {/* <form id='contact-form' onSubmit={handleSubmit}> */}
      <form id='contact-form'>
        <label htmlFor='name'>{'Name: '}</label>
        <input type='text' name='name' id='name' value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor='email'>{'Email: '}</label>
        <input type='text' name='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor='message'>{'Message: '}</label>
        <textarea name='text' id='message' value={message} onChange={(event) => setMessage(event.target.value)} />
        <input type='submit' value='submit' id='submitbtn' />
      </form>
    </div>
  )
}
