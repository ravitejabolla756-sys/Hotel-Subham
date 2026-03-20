import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <BrandLogo />
            <div className="logo-text">
              <h2>SHUBHAM</h2>
              <span>Multi Cuisine Restaurant</span>
            </div>
          </div>
          <p>Authentic Andhra & Multi-Cuisine Dining in Nellore. Serving premium flavors in a modern, organized environment.</p>
          <div className="social-icons">
            <a href="#"><Instagram /></a>
            <a href="#"><Facebook /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/reviews">Reviews</Link>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <Phone size={18} className="text-accent" />
            <span>0861 233 2233</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} className="text-accent"/>
            <span>Atmakur Bus Stand, Nellore, AP</span>
          </div>
          <div className="contact-item">
            <Clock size={18} className="text-accent"/>
            <span>Open till ~11 PM</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hotel Shubham. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
