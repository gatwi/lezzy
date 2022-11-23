import React from 'react';
import "./EventsStyle.css";
import cat1 from "../assets/cat1.jpeg";
import { NavLink } from 'react-router-dom';

const Events = () => {
  return (
    <div className='events-container'>
        <h1 className='catalog-heading'>Catalog</h1>
        <div className='catalog-container'>
            <div className='catalog-card'>
                <img src={cat1} alt="image"/>
                <h2 className='catalog-title'>Catalog Title</h2>
                <div className='cat-details'>
                    <p>Awesome Lorem texts</p>
                </div>
                <div className='cat-btns'>
                    <NavLink to="url.com" className="btn">View</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events;