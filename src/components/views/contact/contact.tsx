import React, { ChangeEvent, FormEvent, useState } from 'react'
import './style.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [response, setResponse] = useState('')

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: typeof form[keyof typeof form] = event.target.value;
    setForm({ ...form, [event.target.id]: value });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (form.name.length === 0 || form.email.length === 0 || form.message.length === 0) {
      setResponse('Please fill in all of the fields, thanks!')
      return;
    }
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": "contact-form", ...form })
    })
      .then(() => setResponse('Thank you for getting in touch!'))
      .catch(error => setResponse('Hmm, that did not send. Please try again later.'));
    setForm({ name: '', email: '', message: '' })
  };

  return (
    <div className='content' id='contact'>
      <form id='contact-form' name='contact-form' method='POST' onSubmit={onSubmit}>
        <label htmlFor='name'>{'Name: '}</label>
        <input type='text' name='name' id='name' value={form.name} onChange={onFieldChange} />
        <label htmlFor='email'>{'Email: '}</label>
        <input type='text' name='email' id='email' value={form.email} onChange={onFieldChange} />
        <label htmlFor='message'>{'Message: '}</label>
        <textarea name='message' id='message' value={form.message} onChange={onFieldChange} />
        <button type='submit'> send </button>
      </form>
      <br />
      <div id='form-response'>{response}</div>
    </div>
  )
}
