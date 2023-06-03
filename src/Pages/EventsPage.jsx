import React from 'react';
import { fetchEvents } from 'services/EventsApi';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);
  return (
    <>
      <ul>
        {events.map(({ name, id }) => {
          return (
            <li key={id}>
              <Link to={id}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default EventsPage;
