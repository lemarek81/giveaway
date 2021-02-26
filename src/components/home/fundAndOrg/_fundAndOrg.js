import React from 'react';
import './_fundAndOrg.scss';
import Decoration from '../../../assets/Decoration.svg';
import ArticleFund from './_articleFund';
import ArticleOrg from './_articleOrg';
import ArticleCollect from './_articleCollect';
export default function fundAndOrg() {
    return (
        <div 
        className='fundAndOrgSection'
        id='fundAndOrg'>
        <div className="fundAndOrgMainSection">   
       <h1>Komu pomagamy</h1>
        <img
        src={Decoration}>
        </img>
        <div className="buttonWrapper">
        <button 
            type='submit'
            className='buttonMedium'
            >Fundacjom
        </button>
        <button 
            type='submit'
            className='buttonMedium'
            >Organizacjom pozarządowym
        </button>
        <button 
            type='submit'
            className='buttonMedium'
            >Lokalnym zbiórkom
        </button>
        </div>
        <ArticleFund></ArticleFund>  
        <ArticleOrg></ArticleOrg>
        <ArticleCollect></ArticleCollect>
        </div>
        </div>
    
        
    )
}
