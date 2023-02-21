import React from "react";
import { NavLink } from "react-router-dom";

function SideMenu(props) {
  return (
    <>
      <ul className="nav flex-column slide-link sticky-top">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/clients">
            Clients
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Offers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Package
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Product
          </a>
        </li>
      </ul>
    </>
  );
}

export default SideMenu;
