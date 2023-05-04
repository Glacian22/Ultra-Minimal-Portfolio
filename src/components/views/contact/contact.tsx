import React, { ChangeEvent, FormEvent, useState } from 'react'
import './style.css'

export default function Contact () {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  
  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: typeof form[keyof typeof form] = event.target.value;
    setForm({ ...form, [event.target.id]: value });
};

const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(form);
};

  return (
    <div className='content' id='contact' onSubmit={onSubmit}>
      <form id='contact-form' name='contact-form'>
        <label htmlFor='name'>{'Name: '}</label>
        <input type='text' name='name' id='name' value={form.name} onChange={onFieldChange} />
        <label htmlFor='email'>{'Email: '}</label>
        <input type='text' name='email' id='email' value={form.email} onChange={onFieldChange} />
        <label htmlFor='message'>{'Message: '}</label>
        <textarea name='message' id='message' value={form.message} onChange={onFieldChange} />
        <button type='submit'> send </button>
      </form>
    </div>
  )
}
