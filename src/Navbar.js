import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      New
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Best Sellers
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Skincare
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Makeup
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Hair+Body
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Gifts
                    </a>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar