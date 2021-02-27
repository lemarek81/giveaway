import React , {useState} from 'react'
import './_contact.scss'
import ContactForm from './_contactForm';
import Footer from '../footer/_footer';
import ContactFormSuccess from './_contactFormSuccess';

const Contact = () => {
    const [fromIsSubmitted, setFromIsSubmitted] = useState(false);
  
    function submitForm() {
        setFromIsSubmitted(true);
    }

    return (
        <div  className='contactSection' id='contact'>

        <div className='contactSectionWrapper'>
            <div className='contactLeft'> </div>
            <div className='contactRight'>
            {!fromIsSubmitted ? (
          <ContactForm submitForm={submitForm} />
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
export default Contact;