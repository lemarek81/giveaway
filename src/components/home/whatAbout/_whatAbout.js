import React from 'react'
import './_whatAbout.scss'
import Decoration from '../../../assets/Decoration.svg';
import Icon1 from '../../../assets/Icon-1.svg';
import Icon2 from '../../../assets/Icon-2.svg';
import Icon3 from '../../../assets/Icon-3.svg';
import Icon4 from '../../../assets/Icon-4.svg';

export default function whatAbout() {
    return (
        <div 
        className='whatAboutSection'
        id='whatAbout'
        >
            <h1>Wystarczą 4 proste kroki</h1>
            <img
            src={Decoration}>
            </img>
        <div className='whatAboutWrapper'>
        <div className='whatAboutElement'>
            <img
            src={Icon1}>
            </img>
            <h3>Wybierz rzeczy </h3>
            <span className="lineElement"></span>
            <p className="textElement">uprania, zabawki, sprzęt i inne</p>
        </div> 
        <div className='whatAboutElement'>
            <img
            src={Icon2}>
            </img>
            <h3>Spakuj je </h3>
            <span className="lineElement"></span>
            <p className="textElement">skorzystaj z worków na śmieci</p>
        </div> 
        <div className='whatAboutElement'>
            <img
            src={Icon3}>
            </img>
            <h3>Zdecyduj komu chcesz pomóc </h3>
            <span className="lineElement"></span>
            <p className="textElement">wybierz zaufane miejsce</p>
        </div> 
        <div className='whatAboutElement'>
            <img
            src={Icon4}>
            </img>
            <h3>Zamów kuriera </h3>
            <span className="lineElement"></span>
            <p className="textElement">kurier przyjedzie w dogodnym terminie</p>
        </div>   
        </div>
        <button 
            type='submit'
            className='buttonBig'
        >
        Oddaj<br></br> rzeczy
        </button>
        </div>
    )
}
