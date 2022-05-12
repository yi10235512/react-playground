import React, { useState } from 'react';
import Footer from '../Footer';
import './About.css'

const About = ({ name }) => {
    return (
        <div className="about-page">
            <div>
                <h1> Hi! {name}!
                </h1>
                <h1> This is about page.</h1>
            </div>
            <Footer />
        </div>
    )
}

export default About;