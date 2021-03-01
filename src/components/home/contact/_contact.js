import React , {useState} from 'react'
import './_contact.scss'
import ContactForm from './_contactForm.js';
import Footer from '../footer/_footer.js';
import ContactFormSuccess from './_contactFormSuccess.js';
import  './_contactFormSuccess.scss';


const ContactSection = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  
    function submitForm() {
        setFormIsSubmitted(true);
    }

    return (
        <div  className='contactSection' id='contact'>
        <div className='contactSectionWrapper'>
            <div className='contactLeft'> </div>
            <div className='contactRight'>
            {formIsSubmitted ? (
          <ContactForm checkSubmitForm={submitForm} />
        ) : (
          <ContactFormSuccess />
        )} 
            </div>
        </div>
        <div className='contactFooter'>
        <Footer></Footer>
        </div>
        </div>
    
    )
}
export default ContactSection;