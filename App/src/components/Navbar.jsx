import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Alice <span>Park</span>
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
        <li>
          <a href="/alice-sunghyun-park-portfolio/resume.pdf" target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </li>
      </ul>
    </nav>
  )
}
