import * as React from 'react';

import './Footer.scss';
// import './../../../node_modules/font-awesome/scss/font-awesome.scss';

interface FooterProps {
    img?: string;
}

export const Footer = ({ img }: FooterProps) => {
    return <footer>
        <div className="logoG">
            <img src={img} alt="" />
        </div>
        <div className="cont-social">
            <a href="#">
                <i id="social-fb" className="fab fa-facebook-f social"></i>
            </a>
            <a href="#">
                <i id="social-tw" className="fab fa-twitter social"></i>
            </a>
            <a href="#">
                <i id="social-gp" className="fab fa-google-plus-g social"></i>
            </a>
            <a href="#">
                <i id="social-em" className="fas fa-envelope social"></i>
            </a>
        </div>
    </footer>;
}