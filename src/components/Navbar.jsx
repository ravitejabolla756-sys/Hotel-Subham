import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const BrandLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="brand-emblem">
    <path d="M50 5 C60 20 65 35 50 45 C35 35 40 20 50 5 Z" strokeWidth="4"/>
    <path d="M95 50 C80 60 65 65 55 50 C65 35 80 40 95 50 Z" strokeWidth="4"/>
    <path d="M50 95 C40 80 35 65 50 55 C65 65 60 80 50 95 Z" strokeWidth="4"/>
    <path d="M5 50 C20 40 35 35 45 50 C35 65 20 60 5 50 Z" strokeWidth="4"/>
    
    <path d="M50 15 C55 25 55 35 50 40 C45 35 45 25 50 15 Z" strokeWidth="2"/>
    <path d="M85 50 C75 55 65 55 60 50 C65 45 75 45 85 50 Z" strokeWidth="2"/>
    <path d="M50 85 C45 75 45 65 50 60 C55 65 55 75 50 85 Z" strokeWidth="2"/>
    <path d="M15 50 C25 45 35 45 40 50 C35 55 25 55 15 50 Z" strokeWidth="2"/>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <BrandLogo />
          <div className="logo-text">
            <h2>SHUBHAM</h2>
            <span>Multi Cuisine Restaurant</span>
          </div>
        </Link>
        
        <div className="desktop-menu">
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <button className="btn btn-primary order-btn">Order Now</button>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path}
            className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
        <button className="btn btn-primary mobile-order-btn">Order Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
