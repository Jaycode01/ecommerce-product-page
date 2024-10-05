import React from 'react'
import './Header.css'
import Logo from '../assets/logo.svg'
import CartIcon from '../assets/icon-cart.svg'
import ProfileImage from '../assets/image-avatar.png'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <header className="header">
        <div>
        <img src={Logo} alt="sneakers logo" className="logo" />
        </div>
        <Navbar />
        <div className="cart">
          <img src={CartIcon} alt="" className='cart' />
        </div>
        <div className="profile">
        <img src={ProfileImage} alt="" className='profile' />
        </div>
      </header>
    </div>
  )
}

export default Header
