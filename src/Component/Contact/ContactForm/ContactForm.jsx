import './ContactForm.css'

const ContactForm = () => {
  return (
    <form className='aj-form'>
      <div className='aj-row aj-name-mail'>
        <input className='aj-name-input' placeholder='Your Name *' type="text" name="name" id="" />
        <input className='aj-email-input' placeholder='Your Email *' type="email" name="email" />
      </div>
      <div className="aj-row">
        <input className='aj-subject-input' placeholder='Subject' type="text" name="subject" />
      </div>
      <textarea className='aj-message-textarea' placeholder='Message *' name="message" rows={6} ></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm