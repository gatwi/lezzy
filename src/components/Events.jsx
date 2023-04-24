import React from 'react';
import "./EventsStyle.css";
import EventCard from './EventCard';
import EventCardData from './EventsData';


const Events = () => {
  return (
    <div className='events-container'>
        <h1 className='catalog-heading'>Events</h1>
        <div className='catalog-container'>
           {EventCardData.map((val, ind) =>{
            return(
                <EventCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                />
            )
           })}
        </div>
    </div>
  );
}

export default Events;