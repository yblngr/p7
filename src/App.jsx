import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Layout from './layout/Layout/Layout';
import Home from './pages/Home/Home';
import Rental from './pages/Rental/Rental';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index loader={loadData} element={<Home />} errorElement={<NotFound />} />
      <Route path="rental/:id" loader={loadData} element={<Rental />} errorElement={<NotFound />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function loadData({ params }) {
  return fetch('/data/rentals.json')
    .then((response) => response.json())
    .then((response) => {
      if (!params.id) return response;
      const result = response.find((rental) => rental.id === params.id);
      if (result) return result;
      throw new Error(`Non existent data ID '${params.id}'`);
    })
    .catch((error) => console.error(`Error fetching Kasa data :\n${error.message}`));
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
