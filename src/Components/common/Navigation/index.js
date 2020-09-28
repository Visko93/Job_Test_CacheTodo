import React from "react";
import { NavLink, Link } from "react-router-dom";

import './style.css';

function NavBar () {
  return(
    <div className="navigation">
      <div className="navigation__nav">
        <div className="navigation__icon">
        <img src="" alt="" className="navigation__icon-logo"/>
      </div>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to='/about'>About</NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to='/error'>Custom 404</NavLink>
          </li>
        </ul>
      </div>
      <ul className="navigation__list">
        <li className="navigation__item">
            <button className="navigation__button">Sign Up</button>
        </li>
        <li className="navigation__item">
          <Link to='/dashboard'>
            <button className="navigation__button">Sign In</button>
          </Link>
        </li>
      </ul>
    </div>
  )
}


export default NavBar