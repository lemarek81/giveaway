import React from 'react'
import Decoration from '../../../assets/Decoration.svg';
import './_contactForm.scss'

export default function _contactForm() {

    
    
    return (
        <div className='contactForm'>
            <h1>Skontaktuj się z nami</h1>
            <img
                src={Decoration}>
            </img>
            <form className='contactFormArea'>
                <div className='contactFirstRow'> 
                    <div className='contactFromInputSetup'>
                        <label for="name">Wpisz swoje imię</label>
                            <input 
                            type='text' 
                            name='name' 
                            placeholder='Krzysztof' 
                            className='nameBox'
                            id='name'
                            /> 
                        <div className='errorField'
                        display='none'
                        >Podane imie jest nieprawidłowe!</div>
                    </div>
                    <div className='contactFromInputSetup'>
                        <label for="email">Wpisz swój email</label>
                            <input 
                            type='email' 
                            name='email' 
                            placeholder='abc@xyz.pl' 
                            className='mailBox'
                            id='email'/> 
                        <div 
                        className='errorField'
                        display='none'
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
                    id='name'/> 
                <div className='errorField'
                display='none'
                >Wiadomośc musi mieć conajmniej 120 znaków</div>
                </div>
                </div>
            </form>
            <button 
            type='submit'
            className='buttonBig'
            id='formSubmit'
            >
                Wyślij
            </button> 
            </div>
        
    )
}

  