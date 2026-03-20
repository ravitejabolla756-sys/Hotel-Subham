import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Navigation, MessageCircle, Info } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="header-overlay"></div>
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact & Location</h1>
          <p>We are ready to serve you</p>
        </motion.div>
      </div>

      <div className="container">
        <div className="contact-grid">
          
          {/* Info Section */}
          <motion.div 
            className="contact-info-panel glass"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left" style={{ marginBottom: "1rem" }}>Get in Touch</h2>
            <p className="contact-subtitle">Located conveniently in the heart of Nellore. Whether you want to dine-in or order delivery, we're here for you.</p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="icon-wrap"><MapPin className="text-accent" /></div>
                <div>
                  <h4>Location</h4>
                  <p>Atmakur Bus Stand,<br/>Nellore, Andhra Pradesh, India</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrap"><Phone className="text-accent" /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>0861 233 2233</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="icon-wrap"><Clock className="text-accent" /></div>
                <div>
                  <h4>Timings</h4>
                  <p>Open Today: 10:00 AM - ~11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="features-strip">
              <div className="f-item"><Info size={16}/> Dine-in</div>
              <div className="f-item"><Info size={16}/> Drive-through</div>
              <div className="f-item"><Info size={16}/> Delivery</div>
            </div>

            <div className="action-buttons">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary">
                <Navigation size={18} style={{marginRight: '8px'}} /> Get Directions
              </a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={18} style={{marginRight: '8px'}} /> WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Embedded Google Map pointing to Nellore. Using a standard iframe embed with Nellore coords */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.604217112003!2d79.9839!3d14.4426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cb4e76ea023%3A0x6bbaecae84fc63!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1703248324831!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Shubham Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
