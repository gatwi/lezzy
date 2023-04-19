import "./ACStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import abt1 from "../assets/abt1.jpeg";
import abt2 from "../assets/abt2.jpeg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Queerious About Us?</h1>
            <p>We're an advocacy group catering to older Queer folks in our society, providing an intersectional theoretical and practical framework on literature and lived experiences, crucial to demonstrating Queers efforts towards upstaging systemic arrangements historically designed to exclude them. And we're doing this through fun, vibes and occassionally, shaking nyash!</p>
            <Link to="/contact">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={abt1} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={abt2} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;