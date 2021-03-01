import React from 'react';
import Decoration from '../../../assets/Decoration.svg';
import './contactFormSuccess.scss'

const ContactFormSuccess = () => {
  return (
    <div className='contactRight'>
      <h1>Formularz został wysłany!<br></br></h1>
      <img
                src={Decoration}>
            </img>
    </div>
  );
};
export default ContactFormSuccess;