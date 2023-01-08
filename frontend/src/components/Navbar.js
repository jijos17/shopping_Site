import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ click }) => {
  return (
    <div className='navbar'>
      {/* logo */}
      <div className='navbar__logo'>
        <h2>MErns shop</h2>

      </div>
      {/* links */}
      <ul className='navbar_links'>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>

              Cart
              <span className='cartlogo__badge'>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            {/* icon */}
            shop
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className='hamburger__menu' onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar