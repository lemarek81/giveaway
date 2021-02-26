import React from 'react';
import './_login.scss';
import Decoration from '../../../assets/Decoration.svg';

export default function login() {
    return (
        <div className='loginForm'>
            <h1>Skontaktuj się z nami</h1>
            <img
                src={Decoration}>
            </img>
                <form className='logiFormArea'>
                            <label 
                                for="email"
                            >
                                Email
                            </label>
                            <input 
                                type='email' 
                                name='name' 
                                placeholder=' ' 
                                className='mailBox'
                                id='name'
                            /> 
                            <div className='errorField'
                            display='none'
                            >
                                Podany e-mail jest nieprawidłowy!
                            </div>                            
                            <label 
                                for="password"
                            >
                                Hasło
                            </label>
                            <input 
                                type='password' 
                                name='password' 
                                placeholder=' ' 
                                className='password'
                                id='name'/> 
                            <div 
                                className='errorField'
                                display='none'
                            >
                                Podane hadło jest nieprawidłowe!
                            </div>
                </form>
                <div className='logingButtonsWrapper'>
                    <div className='registerButton'>Załóż konto</div>
                    <div className='loginButton'>Zaloguj się</div>
                </div> 
         </div>
       
      
    )
}
