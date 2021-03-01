import React from 'react';
import './_home.scss';
import Header from './header/_header.js';
import CounterThree from './counterThree/_counterThree.js';
import WhatAbout from './whatAbout/_whatAbout.js';
import AboutUs from './aboutUs/_aboutUs.js';
import FundAndOrg from './fundAndOrg/_fundAndOrg.js';
import ContactSection from './contact/_contact.js';


export default function Home() {
    return (
        <div className='mainContainer'>
            <Header></Header>
            <CounterThree></CounterThree>
            <WhatAbout></WhatAbout>
            <AboutUs></AboutUs>
            <FundAndOrg></FundAndOrg>
            <ContactSection></ContactSection>
        </div>
    )
}
