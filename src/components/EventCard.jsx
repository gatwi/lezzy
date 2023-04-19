import React from 'react';
import "./EventsStyle.css";
import { NavLink } from 'react-router-dom';

const EventCard = (props) => {
  return (
    <div className='catalog-card'>
            <img src={props.imgsrc} alt=""/>
            <h2 className='catalog-title'>{props.title}</h2>
            <div className='cat-details'>
                <p>{props.text}</p>
            </div>
            <div className='cat-btns'>
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
    </div>
  )
}

export default EventCard;