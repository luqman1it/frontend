import SectionHeader from '../SectionHeader/SectionHeader'
import './Contact.css'
import ContactForm from './ContactForm/ContactForm'
import { toast, ToastContainer } from 'react-toastify';

export default function Contact() {
    return (
        <>
                        <ToastContainer/>
                        <div id='contact' className='aj-contact container padding-section'>


<div className="aj-contact-content">
    <SectionHeader title="Contact Me" />
    <ContactForm />

</div>
</div>
        </>

    )
}
