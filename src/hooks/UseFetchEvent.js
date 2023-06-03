import React, { useState, useEffect } from 'react';
import { fetchEventById } from '../services/EventsApi';
import { useParams } from 'react-router-dom';

const UseFetchEvent = () => {
  const [event, setEvent] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);
  return event;
};

export default UseFetchEvent;
