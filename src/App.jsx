import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/Home'
import Rental from './pages/Rental'
import About from './pages/About'
import NotFound from './pages/NotFound'

import Test from './test/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rental/:id" element={<Rental />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
