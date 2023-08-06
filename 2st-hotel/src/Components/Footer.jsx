import React from 'react'
import './Footer.css'
import img6 from '../Assets/img6.png'
import img7 from '../Assets/img7.png'
import img8 from '../Assets/img8.png'

const Footer = () => {
    return (
        <div>
            <div className='Footer'>
                <div className='Lfoot'>
                    <div className='paragrp'>Looking forward to a wonderful stay</div>
                    <div className='socialmedia'>
                        <img src={img6} alt="fb" />
                        <img src={img7} alt="Insta" />
                        <img src={img8} alt="google" />
                    </div>
                </div>
                <div className='Rfoot'>
                    <div className='HomeF'>
                        <ul><h4>Home</h4>
                            <li>Booking</li>
                            <li>Facilities</li>
                            <li>Location</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='Help'>
                        <ul><h4>Help</h4>
                            <li>About Us</li>
                            <li>Help Center</li>
                            <li>Privacy Policy</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className='GetApp'>
                        <ul><h4>Get the App</h4>
                            <li>iOS app</li>
                            <li>Android app</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
