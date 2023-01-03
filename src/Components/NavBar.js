import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/planet.png';

const NavBar = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  const activeClassName = 'underline';

  return (
    <nav>
      <div>
        <NavLink
          to="/"
        >
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink
            to="rockets"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="missions"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink to="myprofile">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                My Profile
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
