import React from 'react';
import useFetchEvent from '../../hooks/UseFetchEvent';
import { Link } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();
  console.log(event);
  return (
    <>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} />
          <Link to="details">More details</Link>
        </div>
      )}
    </>
  );
};

export default EventSubPage;
