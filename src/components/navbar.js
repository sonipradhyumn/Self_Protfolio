import React from 'react';
import {Link, useHistory} from 'react-router-dom';


function navbar () {
  return (
    <div>
      <nav classname="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a classname="navbar-brand" href="#">Navbar</a>
        <button
          classname="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classname="navbar-toggler-icon" />
        </button> */}
        
        <div classname="collapse navbar-collapse" id="navbarNav">
          <ul classname="navbar-nav">
            <li classname="nav-item active">
            <Link to="/my-app" /*onClick={closeMobileMenu}*/>
              Home
            </Link>
            </li>
            <li classname="nav-item">
            <Link to="/my-app" /*onClick={closeMobileMenu}*/>
              Home
            </Link>
            </li>
            <li classname="nav-item">
            <Link to="/my-app" /*onClick={closeMobileMenu}*/>
              Home
            </Link>
            </li>
            <li classname="nav-item">
            <Link to="/my-app" /*onClick={closeMobileMenu}*/>
              Home
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
