import React, { useState } from 'react';
import './About.css'

const About = ({ name }) => {
    return (
        <div >
            <h1> Hi! {name}! </h1>
            <h1> This is about page.</h1>
        </div>
    )
}

export default About;