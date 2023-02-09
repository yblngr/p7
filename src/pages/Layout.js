import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <p>[Layout]</p>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
