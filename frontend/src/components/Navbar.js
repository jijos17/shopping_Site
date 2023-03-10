import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = ({ click }) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }
  return (
    <div className='navbar'>
      {/* logo */}
      <div className='navbar__logo'>
        <h2>Shoppy</h2>

      </div>
      {/* links */}
      <ul className='navbar_links'>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>

              Cart
              <span className='cartlogo__badge'>{getCartCount()}</span>
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