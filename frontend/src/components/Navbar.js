import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../components/images/Trendifylogo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector } from 'react-redux';

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;


  const cartCounter=useSelector(state=>state.cartCounter)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} width="180" height="80" alt="Trendify Logo" className="me-2" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/home') ? 'text-purple-600' : ''}`} to="/home" style={isActive('/home') ? { position: 'relative', display: 'inline-block', color: 'purple' } : {}}>
                  Home {isActive('/home') && <span style={{ position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: 'purple' }}></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/men') ? 'text-purple-600' : ''}`} to="/men" style={isActive('/men') ? { position: 'relative', display: 'inline-block', color: 'purple' } : {}}>
                  Men {isActive('/men') && <span style={{ position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: 'purple' }}></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/women') ? 'text-purple-600' : ''}`} to="/women" style={isActive('/women') ? { position: 'relative', display: 'inline-block', color: 'purple' } : {}}>
                  Women {isActive('/women') && <span style={{ position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: 'purple' }}></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/kids') ? 'text-purple-600' : ''}`} to="/kids" style={isActive('/kids') ? { position: 'relative', display: 'inline-block', color: 'purple' } : {}}>
                  Kids {isActive('/kids') && <span style={{ position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: 'purple' }}></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/living') ? 'text-purple-600' : ''}`} to="/living" style={isActive('/living') ? { position: 'relative', display: 'inline-block', color: 'purple' } : {}}>
                  Living {isActive('/living') && <span style={{ position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: 'purple' }}></span>}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/beauty') ? 'text-purple-600' : ''}`} to="/beauty" style={isActive('/beauty') ? { position: 'relative', display: 'inline-block', color: 'purple' } : {}}>
                  Beauty {isActive('/beauty') && <span style={{ position: 'absolute', left: 0, bottom: '-2px', width: '100%', height: '2px', backgroundColor: 'purple' }}></span>}
                </Link>
              </li>
              <li className="nav-item">
  <Link className="nav-link position-relative" to="/cart">
    <i className="fas fa-shopping-cart" style={{ color: 'purple', fontSize: '1.2rem' }}></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {cartCounter}
    </span>
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