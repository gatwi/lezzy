import React from 'react';
import "./EventsStyle.css";
import cat1 from "../assets/cat1.jpeg";
import { NavLink } from 'react-router-dom';

const Events = () => {
  return (
    <div className='events-container'>
        <h1 className='catalog-heading'>Events</h1>
        <div className='catalog-container'>
            <div className='catalog-card'>
                <img src={cat1} alt=""/>
                <h2 className='catalog-title'>Games and Trivia</h2>
                <div className='cat-details'>
                    <p>Awesome Lorem texts</p>
                </div>
                <div className='cat-btns'>
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events;