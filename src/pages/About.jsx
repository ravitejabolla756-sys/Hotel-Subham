import { motion } from 'framer-motion';
import { Award, Users, Utensils, Star } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="header-overlay"></div>
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Us</h1>
          <p>Serving Nellore with Authentic Flavors</p>
        </motion.div>
      </div>

      <section className="story-section container">
        <div className="story-grid">
          <motion.div 
            className="story-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title text-left">The Hotel Shubham Story</h2>
            <p>From a local eatery to a premium dining destination, Hotel Shubham has been at the heart of Nellore's food culture. We pride ourselves on retaining the authentic, fiery taste of Andhra cuisine while providing an elevated, organized dining experience.</p>
            <p>Our commitment to cleanliness, affordability, and quality sets us apart as a trust-building establishment for families, friends, and solo food lovers alike.</p>
            
            <div className="stats-container">
              <div className="stat-box">
                <Star className="text-accent" size={32} />
                <h3>277+</h3>
                <span>Happy Reviews</span>
              </div>
              <div className="stat-box">
                <Utensils className="text-accent" size={32} />
                <h3>₹200-400</h3>
                <span>Avg Pricing</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="story-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" alt="Restaurant Ambiance" />
          </motion.div>
        </div>
      </section>

      <section className="architecture-section wrapper-bg glass mx-container">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Designed for Comfort</h2>
            <p className="max-w-700">Experience our thoughtfully designed 3-floor dining setup, tailored to cater to all preferences with utmost respect to culinary traditions.</p>
          </motion.div>

          <div className="floor-grid">
            <motion.div className="floor-card" whileHover={{ y: -10 }}>
              <div className="floor-number">1st Floor</div>
              <h3>Pure Veg Dining</h3>
              <p>A separate, serene environment dedicated entirely to our vegetarian patrons, ensuring purity and peace of mind.</p>
            </motion.div>
            <motion.div className="floor-card" whileHover={{ y: -10 }}>
              <div className="floor-number">2nd Floor</div>
              <h3>Premium Non-Veg</h3>
              <p>An elegant space for families and groups to indulge in our rich, spicy Andhra specials and biryanis.</p>
            </motion.div>
            <motion.div className="floor-card" whileHover={{ y: -10 }}>
              <div className="floor-number">3rd Floor</div>
              <h3>Private Events & Banquets</h3>
              <p>Spacious, customizable seating for celebrations, corporate gatherings, and large family dinners.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
