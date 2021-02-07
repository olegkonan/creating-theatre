import React from 'react'
import { NavLink } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar bg-dark header">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mr-4">
            <NavLink 
              className="nav-link text-light" 
              exact 
              to={'/'}
            >
              Создание сценария
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              className="nav-link text-light" 
              to={'/scenario'}
            >
              Готовый сценарий
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}