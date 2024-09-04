import React from 'react';
import { CgSearch } from 'react-icons/cg';
import { TbShoppingBag } from 'react-icons/tb';
import HeroImage from './imgfirstscreen/hero image 1.png'
import VectorImg from './imgfirstscreen/Group 11.png'
import Vector2Img from './imgfirstscreen/Group 12 (1).png'
import { FaArrowRightLong } from "react-icons/fa6";
import IconExplore from './imgfirstscreen/icons/explore.png'
import IconTwitter from './imgfirstscreen/icons/twitter.png'
import IconInstagram from './imgfirstscreen/icons/instagram.png'
import IconDiscord from './imgfirstscreen/icons/ic_round-discord.png'
import IconFb from './imgfirstscreen/icons/facebook.png'


export default function Header() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Пошуковий запит:', searchQuery);
    // Логіка для пошуку
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
           <span className="logo1">
            Holo
           </span>
           <span className="logo2">
             Gaze
           </span>
           <span className="logo3">
            .
           </span>
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
            <CgSearch  />
            </button>
            </form>

          <TbShoppingBag className="shopping-bag-icon" />
        </div>
      </div>
      
      <div className='headerMain'>
          <div className="leftSectionMain">
            <p>Virtual Headsets</p>
            <h1>Experience a new dimension of reality</h1>
            <h4>Step into the future with our virtual headset, come to life right before your eyes</h4>
            <div className="btnSectionMain">
                <button className='leftSectionMainButton'>Visit sttore<FaArrowRightLong className='IconArrow' /></button>
                <button className='leftSectionMainButton'><img className='IconExplore' src={IconExplore}/>Explore</button>
            </div>
            <h4>Follow us</h4>
            <ul className="socialIcons">
              <li><a><img src={IconTwitter}/></a></li>
              <li><a><img src={IconInstagram}/></a></li>
              <li><a><img src={IconDiscord}/></a></li>
              <li><a><img src={IconFb}/></a></li>
            </ul>
           </div>
        <div className='firstScreenRight'>
          <img className='heroImage' src={HeroImage} />
          <img className='vectorImg' src={VectorImg} />
          <img className='vector2Img' src={Vector2Img} />
        </div>
    </div>
    </header>
  );
}
