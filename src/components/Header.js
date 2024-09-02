import React from 'react';
import { CgSearch } from 'react-icons/cg';
import { TbShoppingBag } from 'react-icons/tb';


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
            <CgSearch style={{ color: '#555', fontSize: '20px' }} />
          </button>
        </form>

        <TbShoppingBag className="shopping-bag-icon" />
      </div>
    </header>
  );
}
