import React from 'react'
import { NavLink } from "react-router-dom";

export class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Иван",
      surname: "Васильевич"
    }
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient">
          <div className="container-fluid">
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to={'/'}>Дом</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" exact to={'/creation'}>Создание сценария</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to={'/scenario'}>Готовый сценарий</NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
    )
  }
}