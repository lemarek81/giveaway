import React from 'react';
import './_home.scss';
import Header from './header/_header';
import CounterThree from './counterThree/_counterThree';
import WhatAbout from './whatAbout/_whatAbout';
import AboutUs from './aboutUs/_aboutUs';
import FundAndOrg from './fundAndOrg/_fundAndOrg';
import Contact from './contact/_contact';


export default function Home() {
    return (
        <div className='mainContainer'>
            <Header></Header>
            <CounterThree></CounterThree>
            <WhatAbout></WhatAbout>
            <AboutUs></AboutUs>
            <FundAndOrg></FundAndOrg>
            <Contact></Contact>
        </div>
    )
}
