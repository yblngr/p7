import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './layout/Home'
import Accommodation from './layout/Accommodation'
import About from './layout/About'
import NotFound from './layout/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accommodation" element={<Accommodation />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
