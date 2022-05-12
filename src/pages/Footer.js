import React from "react";
import './Footer.css';
import { BsGithub, BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'
import Wave from './Wave.js'

const Footer = () => {
    return(
        <div className="footer">
            {/* <Wave /> */}
            <ul className="social_icon">
                <li><a href="#"><BsGithub/></a></li>
                <li><a href="#"><BsLinkedin/></a></li>
                <li><a href="#"><BsFacebook/></a></li>
                <li><a href="#"><BsInstagram/></a></li>
            </ul>
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Memo</a></li>
                <li><a href="#">Tools</a></li>
                <li><a href="#">Game</a></li>
            </ul>
        </div>
    )
}

export default Footer;