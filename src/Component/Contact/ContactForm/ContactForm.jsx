import { useEffect, useState } from 'react'
import './ContactForm.css'
import axios from 'axios';

const ContactForm = () => {
  const [formMessage, setFormMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  function handelFormMessage(e) {
    e.preventDefault();
    useEffect(() => {
      axios.post('http://127.0.0.1:8000/api/StoreContact', {
        name: formMessage.name,
        email: formMessage.email,
        subject: formMessage.subject,
        message: formMessage.message
      });
    })
  }
  return (
    <form onSubmit={(e) => handelFormMessage(e)} className='aj-form'>
      <div className='aj-row aj-name-mail'>
        <input className='aj-name-input' onChange={(e) => setFormMessage({ ...formMessage, name: e.target.value })} placeholder='Your Name *' type="text" name="name" id="" />
        <input className='aj-email-input' onChange={(e) => setFormMessage({ ...formMessage, email: e.target.value })} placeholder='Your Email *' type="email" name="email" />
      </div>
      <div className="aj-row">
        <input className='aj-subject-input' onChange={(e) => setFormMessage({ ...formMessage, subject: e.target.value })} placeholder='Subject' type="text" name="subject" />
      </div>
      <textarea className='aj-message-textarea' onChange={(e) => setFormMessage({ ...formMessage, message: e.target.value })} placeholder='Message *' name="message" rows={6} ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm