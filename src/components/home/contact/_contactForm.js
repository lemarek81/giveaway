import React from 'react'
import Decoration from '../../../assets/Decoration.svg';
import './_contactForm.scss'
import ButtonFunction from '../_buttons.js';
import ContactUseForm from './_contactUseForm';
import validate from './_contactValidateInfo';



const ContactForm = ({submitContactForm}) => {
        const { handleChange, handleSubmitFrom, values, errors } = ContactUseForm(
          submitContactForm,
          validate
        );
    
    return (
        <div className='contactForm'>
            <h1>Skontaktuj się z nami</h1>
            <img
                src={Decoration}>
            </img>
            <form className='contactFormArea'onSubmit={handleSubmitFrom}  noValidate>
                <div className='contactFirstRow'> 
                    <div className='contactFromInputSetup'>
                        <label for="name">Wpisz swoje imię</label>
                            <input 
                            type='text' 
                            name='name' 
                            placeholder='Krzysztof' 
                            className='nameBox'
                            id='name'
                            value={values.username}
                            onChange={handleChange}
                            /> 
                            {errors.username && <p>{errors.username}</p>}
                    <div 
                    className='errorField'
                    display='none'
                    >
                    Podane imie jest nieprawidłowe!
                    </div>
                    </div>
                    <div className='contactFromInputSetup'>
                        <label for="email">Wpisz swój email</label>
                            <input 
                            type='email' 
                            name='email' 
                            placeholder='abc@xyz.pl' 
                            className='mailBox'
                            id='email'
                            value={values.username}
                            onChange={handleChange}
                            /> 
                            {errors.username && <p>{errors.username}</p>}
                        <div 
                        className='errorField'
                        >
                        Podany e-mail jest nieprawidłowy!</div>
                    </div>
                 </div>
                <div className='contactSecondRow'>
                <div className='contactFromInputSetup'>
                        <label for="leaveMessage"> Wpisz swoją wiadomość</label>
                            <input 
                            type='text' 
                            name='leaveMessage' 
                            placeholder='lorem inpus dolor sit amet, consctetur adipsicin elit
                            sed do elismod temport incidibund ut labore et doloer magna aliqua. 
                            Ut enim ad minim veniam , quis nostrud exercitation ullamco laoris nisi ut aliquip ex ea commodo cpnsequat.' 
                            minlength='120' 
                            className='messageBox'
                            id='name'
                            value={values.username}
                            onChange={handleChange}
                            /> 
                            {errors.username && <p>{errors.username}</p>}
                                            <div className='errorField'
                        display='none'
                        >Wiadomośc musi mieć conajmniej 120 znaków</div>
                        </div>
                </div>
            </form>
            <ButtonFunction 
            type='submit'
            buttonSize='buttonSend'
            id='formSubmit'
            >
            Wyślij
            </ButtonFunction> 
            </div>
        
    )
}

export default ContactForm;