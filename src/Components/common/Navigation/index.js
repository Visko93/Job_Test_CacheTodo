import React from "react";


function NavBar () {
  return(
    <div className="navigation">
      <div className="navigation__icon">
        <img src="" alt="" className="navigation__icon-logo"/>
      </div>
      <ul className="navigation__list">
        <li className="navigation__item"></li>
        <li className="navigation__item"></li>
        <li className="navigation__item"></li>
      </ul>
      <ul className="navigation__list">
        <li className="navigation__item">
          <button className="navigation__button">Sign Up</button>
        </li>
        <li className="navigation__item">
          <button className="navigation__button">Sign In</button>
        </li>
      </ul>
    </div>
  )
}


export default NavBar