import React from 'react'
import './_contact.scss'
import ContactForm from './_contactForm';
import Footer from '../footer/_footer';

export default function contact() {
    return (
        <div  className='contactSection' id='contact'>

        <div className='contactSectionWrapper'>
            <div className='contactLeft'> </div>
            <div className='contactRight'>
            <ContactForm></ContactForm>   
            </div>
        </div>
        <div className='contactFooter'>
        <Footer></Footer>
        </div>
        </div>
    
    )
}
