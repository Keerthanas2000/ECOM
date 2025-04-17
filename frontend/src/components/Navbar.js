import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../components/images/Trendifylogo.png';

function Navbar() {
  const location = useLocation();

  // Helper function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

<style>
  
</style>

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src={logo}
              width="180" 
              height="80" 
              alt="Trendify Logo"
              className="me-2"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/home') ? 'active-link' : ''}`} 
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/men') ? 'active-link' : ''}`} 
                  to="/men"
                >
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/women') ? 'active-link' : ''}`} 
                  to="/women"
                >
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/kids') ? 'active-link' : ''}`} 
                  to="/kids"
                >
                  Kids
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/living') ? 'active-link' : ''}`} 
                  to="/living"
                >
                  Living
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/beauty') ? 'active-link' : ''}`} 
                  to="/beauty"
                >
                  Beauty
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;