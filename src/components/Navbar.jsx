import React from 'react'; 
import { Link } from "react-router-dom"; 
import "./NavStyles.css";

const Navbar = () => {
  return (
    <div className="header" >
        <Link to="/">
            <hi>26&Above</hi>
        </Link>
        <ul className='nav-menu' >
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/catalog">Catalog</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar