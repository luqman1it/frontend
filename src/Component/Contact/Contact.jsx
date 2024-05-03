import SectionHeader from '../SectionHeader/SectionHeader'
import './Contact.css'
import ContactForm from './ContactForm/ContactForm'

export default function Contact() {
    return (
        <div id='contact' className='aj-contact container padding-section'>
            <div className="aj-contact-content">
                <SectionHeader title="Contact Me" />
                <ContactForm />
            </div>
        </div>
    )
}
