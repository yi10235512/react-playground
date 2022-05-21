import React from "react";
import './Footer.css';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link';
import Wave from './Wave.js'

const Footer = () => {
    return(
        <div className="footer">
            {/* <Wave /> */}
            <ul className="social_icon">
                <li><a href="https://github.com/yi10235512" target='_blank'><BsGithub/></a></li>
                <li><a href="#"><BsLinkedin/></a></li>
                <li><a href="#"><BsFacebook/></a></li>
                <li><a href="#"><BsInstagram/></a></li>
            </ul>
            <ul class="menu">
                <li><Link to='/#'>Home</Link></li>
                <li><Link to='/memo'>Memo</Link></li>
                <li><Link to='/tools'>Tools</Link></li>
                <li><Link to='/game'>Game</Link></li>
            </ul>
        </div>
    )
}

export default Footer;