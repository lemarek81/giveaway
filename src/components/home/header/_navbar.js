import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './_navbar.scss';
import ButtonFunction from '../_buttons.js';

export default class Navigation extends Component {
    
    scrollToTop = () => {
        scroll.scrollToTop();
      };

      render () {
    return (

        <nav className="navbar" id="navbar">
            <div className="navContent">
              <ul className="navUl">
                <li>
                <Link 
                        activeClass="active"
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    ><ButtonFunction buttonSize='buttonNav'>Start</ButtonFunction></Link>
                </li>
                <li>
                  <Link 
                    activeClass="active"
                    to="whatAbout"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                ><ButtonFunction buttonSize='buttonNav'>O co chodzi?</ButtonFunction></Link>
                </li>
                <li>
                <Link 
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                ><ButtonFunction buttonSize='buttonNav'>O nas</ButtonFunction></Link>  
                </li>
                <li>
                  <Link 
                    activeClass="active"
                    to="fundAndOrg"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={100}
                ><ButtonFunction buttonSize='buttonNav'>Fundacja i Organizacje</ButtonFunction></Link>  
                </li>
                <li>
                    <Link 
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                    <ButtonFunction buttonSize='buttonNav'>Kontakt</ButtonFunction>
                    </Link>
                </li>      
          </ul> 
          </div>
        </nav>
    )
}
}
