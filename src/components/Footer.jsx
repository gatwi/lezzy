import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import "./FooterStyle.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                    <div>
                        <p>ABC Plaza, Westlands</p>
                        <p>Nairobi, Kenya</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        0712 345 678
                    </h4>
                </div>
                <div className='phone'>
                    <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        info@gmail.com
                    </h4>
                </div>
            </div>
            <div className='right'>
                <h4>About Us!</h4>
                <p>We are a fun, queer space that is dedicated to older queer folk.</p>
                <div className='social'>
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;