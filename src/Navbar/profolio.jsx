import { NavLink } from "react-router-dom";
import './profolio.css'
export default function Profolio(){
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
      <a className="navbar-brand" href="#">Profolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex gap-4 ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink to="/" className={({ isActive }) =>
     isActive ? "text-primary nav-link" : "nav-link"
  }>
     Home
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) =>
     isActive ? "text-danger nav-link" : "nav-link"
  }>
     About
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) =>
     isActive ? "text-success nav-link" : "nav-link"
  }>
     Contact Me
          </NavLink>
          </li>
          </ul>
      </div>
    </div>
  </nav>
    )
  }