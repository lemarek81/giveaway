import React from 'react';
import Instagram from '../../../assets/Instagram.svg';
import Facebook from '../../../assets/Facebook.svg';
import './_footer.scss';

export default function _footer() {
    return (
        <div className="footer">
            <div className="empty"></div>
            <small>Copryght &copy; by CodersLab</small>
            <div className="socialMedia">
                <img
                src={Facebook}>
                </img>
                <img
                src={Instagram}>
                </img>
            </div>
        </div>
    )
}
