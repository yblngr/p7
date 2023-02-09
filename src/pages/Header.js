import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <p>[Header]</p>
      <p>LOGO</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
