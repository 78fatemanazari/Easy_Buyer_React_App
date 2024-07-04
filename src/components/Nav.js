import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { ShopContext } from '../context/shopContext';
import './nav.css'


const Nav = () => {
  const {cartItems} = useContext(ShopContext)
  const itemCount = cartItems?.reduce((prev, current) => {
    return prev + current.count
  },0)
    return (
      <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <div className='container'>
        <a className='navbar-brand'>EasyBuyer</a>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
            <Link to="/" className='nav-link'>Shop</Link>
          </li>
          <li className='navbar-item'>
            <Link to="/cart" className='nav-link'>
              <FontAwesomeIcon icon={faShoppingCart} />
              {itemCount > 0 && <span className='cart-items-count'>{itemCount}</span>}
            </Link>
          </li>
        </ul>
      </div> 
    </div>
    );
}

export default Nav;