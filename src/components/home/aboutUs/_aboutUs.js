import React from 'react';
import './_aboutUs.scss';
import Decoration from '../../../assets/Decoration.svg';
import Signature from '../../../assets/Signature.svg';

export default function aboutUs() {
    return (
        <div 
        className='aboutUsSection'
        id='aboutUs'
        >
         <div className='aboutUsLeft'>
             <div className='aboutUsLeftInner'>
            <h1>O nas</h1>
            <img
            src={Decoration}>
            </img>
            <span>Nori grape silver beet broccoli kombu beet greens fava 
                bean potato quandong celery, bunya nuts blakc0eyed pea prairie 
                turnip leek lnetil tunip greens parsnip.</span>
            <img
            className="signature"
            src={Signature}>
            </img> 
            </div>    
        </div>
        <div className='aboutUsRight'>
        </div>
        </div>
    )
}
