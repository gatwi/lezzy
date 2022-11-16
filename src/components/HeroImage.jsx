import React from 'react'
import "./HeroImgStyle.css";
import IntroImg from "../assets/intro-img.jpg"
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' 
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className='content'>
            <h1>Hello Queers!</h1>
            <Link to="/catalog" className='btn'>Catalog</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
    </div>
  )
}

export default HeroImage;