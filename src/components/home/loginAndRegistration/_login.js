import React from 'react';
import './_register.scss';
import Navigation from '../header/_navbar';
import Decoration from '../../../assets/Decoration.svg';
import ButtonFunction from '../_buttons.js';
import '../_buttons.scss';
import {Link} from 'react-router-dom';

export default function login() {
    return (
        
        <div className='registerContainer'>
        <div className='menuWrapper'>
            <ul>
              <li>
                <div className='menuTop'>
                    <span 
                    className='User'> 
                    Zarejestrowany: Jan Kowalski 
                    </span>
                    <Link 
                    to='/login'>
                      <ButtonFunction 
                      type='submit'
                      buttonSize='buttonSmall'>
                      Zaloguj
                      </ButtonFunction>
                    </Link>
                    <Link 
                    to='/register'
                    >
                      <ButtonFunction
                      type='submit'
                      buttonSize='buttonSmall'>
                     Załóż konto
                      </ButtonFunction>
                    </Link>
                    <Link 
                    to='/login'
                    >
                      <ButtonFunction
                      type='submit'
                      buttonSize='buttonSmall'>
                     Wyloguj się
                      </ButtonFunction>
                    </Link>
                </div>
              </li>
              <li>
                <div className='menuMain'>
                    <Navigation></Navigation>
                </div>
              </li>
            </ul>
          </div>
          <div>
        <div className='registerForm'>
            <h1>Załóż konto</h1>
            <img
                src={Decoration}>
            </img>
                <form className='registerFormArea'>
                    <div className='registerInput'>
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
                            
                        </div>
                </form>
                <div className='logingButtonsWrapper'>
                    <ButtonFunction
                    type='submit'
                    buttonSize='buttonSend'
                    id='formSubmitLogin'>Zaloguj się</ButtonFunction>
                    <ButtonFunction
                    type='submit'
                    buttonSize='buttonSend'
                    id='formSubmitRegister'>Załóż konto</ButtonFunction>
                </div> 
         </div>
         <div className='registerLogout'>
             <h1>Wylogowanie nastąpiło pomyślnie</h1>
             <img
                 src={Decoration}>
             </img>
             <ButtonFunction
                type='submit'
                buttonSize='buttonSend'
                id='formSubmitLogout'>
                Strona główna
            </ButtonFunction>        
          </div>
        </div>
</div>
      
    )
}
