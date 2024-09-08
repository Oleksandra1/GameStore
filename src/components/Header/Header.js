import React, { useState } from 'react'
import './Header.css';
import { CgSearch } from 'react-icons/cg';
import { TbShoppingBag } from 'react-icons/tb';
import { FaArrowRightLong } from "react-icons/fa6";
import Order from '../Order/Order';

const showOrders = (props) => {
  let total = 0
  props.orders.forEach(el => total += Number.parseFloat(el.price))
  return(
    <div>
      {props.orders.map(el => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
      <p className='total'>Total: {total}$</p>  
      <button className='place-an-order'>Place an order</button>
    </div>
  )
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>No goods</h2>
  </div>)
}
export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    const [searchQuery, setSearchQuery] = useState('');
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Search query:', searchQuery);
      };
  return (
    <header className="header">
      <div className='header-top'>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Catalog</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">Features</li>
          </ul>
        </nav>
        <div className='logo'>
          <span className="logo1">Holo</span>
          <span className="logo2">Gaze</span>
          <span className="logo3">.</span>
        </div>
        <div className="header-right">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button type="submit" className="search-button">
              <CgSearch />
            </button>
          </form>

          <TbShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)}
            className={`shop-cart-button ${cartOpen && 'active'}`}
          />

          {cartOpen && (
            <div className='shop-cart'>
              {props.orders.length > 0 ?
                 showOrders(props) : showNothing()}
            </div>
          )}
        </div>
      </div>
      <div className='headerMain'>
        <div className="leftSectionMain">
          <p>Virtual Headsets</p>
          <h1>Experience a new dimension of reality</h1>
          <h4>Step into the future with our virtual headset, come to life right before your eyes</h4>
          <div className="btnSectionMain">
            <button className='leftSectionMainButton'>
              Visit store <FaArrowRightLong className='IconArrow' />
            </button>
            <button className='leftSectionMainButton'>
              <img className='IconExplore' src="/img/header/explore.png" alt="Explore" />
              Explore
            </button>
          </div>
          <h4>Follow us</h4>
          <ul className="socialIcons">
            <li><a href="#"><img src="/img/header/twitter.png" alt="Twitter" /></a></li>
            <li><a href="#"><img src="/img/header/instagram.png" alt="Instagram" /></a></li>
            <li><a href="#"><img src="/img/header/ic_round-discord.png" alt="Discord" /></a></li>
            <li><a href="#"><img src="/img/header/facebook.png" alt="Facebook" /></a></li>
          </ul>
        </div>
        <div className='firstScreenRight'>
          <img className='heroImage' src="/img/header/hero image 1.png" alt="Hero" />
          <img className='vectorImg' src="/img/header/Group 11.png" alt="Group 11" />
          <img className='vector2Img' src="/img/header/Group 12 (1).png" alt="Group 12" />
        </div>
      </div>
    </header>  
  )
}
