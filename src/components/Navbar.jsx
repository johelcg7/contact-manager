import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Contact Manager
        </Link>

        <button className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/contacts" className="nav-link" onClick={() => setIsOpen(false)}>
            Contacts
          </Link>
          <Link to="/add" className="nav-link" onClick={() => setIsOpen(false)}>
            Add Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
