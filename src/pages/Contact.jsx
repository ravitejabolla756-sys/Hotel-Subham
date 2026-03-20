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
                  <p>8612332233</p>
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
              <a href="https://www.google.com/maps/place/Hotel+Shubham/@14.4563637,79.9875603,17z/data=!3m1!4b1!4m6!3m5!1s0x3a4c8dc20fc88dfd:0xe4a54fc2961e0ca5!8m2!3d14.4563637!4d79.9901352!16s%2Fg%2F11sl16nstz" target="_blank" rel="noreferrer" className="btn btn-primary">
                <Navigation size={18} style={{marginRight: '8px'}} /> Get Directions
              </a>
              <a href="https://wa.me/918612332233" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.151054363234!2d79.987560315!3d14.4563637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8dc20fc88dfd%3A0xe4a54fc2961e0ca5!2sHotel%20Shubham!5e0!3m2!1sen!2sin!4v1703248324831!5m2!1sen!2sin" 
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
