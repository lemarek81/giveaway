import React from 'react';
import './_register.scss';
import Decoration from '../../../assets/Decoration.svg';
export default function register() {
    return (
        <div className='registerForm'>
            <h1>Skontaktuj się z nami</h1>
            <img
                src={Decoration}>
            </img>
                <form className='registerFormArea'>
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
                                Podane hasło jest nieprawidłowe!
                            </div>
                            <label 
                                for="password"
                            >
                                Hasło
                            </label>
                            <input 
                                type='password' 
                                name='passwordRepet' 
                                placeholder=' ' 
                                className='password'
                                id='name'/> 
                            <div 
                                className='errorField'
                                display='none'
                            >
                                Hasła nie pasują
                            </div>
                </form>
                <div className='logingButtonsWrapper'>
                    <div className='registerButton'>Załóż konto</div>
                    <div className='loginButton'>Zaloguj się</div>
                </div> 
         </div>
       
      
    )
}
