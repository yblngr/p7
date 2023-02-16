import { NavLink } from 'react-router-dom'

import Logo from '../components/Logo'

function Header() {
  return (
    <header>
      <div className="container">
        <Logo />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/about">&Agrave;&nbsp;propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
