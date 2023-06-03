import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePages from '../Pages/HomePages';
import EventsPage from 'Pages/EventsPage';
import EventSubPage from './EventSubPage/EventSubPage';
import SearchPage from 'Pages/SearchPage';
import EventDetailsPage from '../Pages/EventDetailsPages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />

        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>

        <Route path="search" element={<SearchPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>

        <Route path="events/:id/details" element={<EventDetailsPage />} />
        <Route path="search/:id/details" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  );
};
