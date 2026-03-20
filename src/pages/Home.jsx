import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          {/* Using an elegant dark background with a subtle gradient mask instead of a video placeholder for immediate aesthetic */}
          <div className="hero-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=2000&auto=format&fit=crop" 
            alt="Biryani Premium" 
            className="hero-video-placeholder" 
          />
        </div>
        
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authentic Andhra & Multi-Cuisine Dining in Nellore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the rich, bold flavors of traditional recipes in a premium setting.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/menu" className="btn btn-primary">View Menu</Link>
            <Link to="/contact" className="btn btn-outline">Table Reservation</Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview container">
        <motion.div 
          className="about-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-text">
            <h2 className="section-title text-left">Serving Nellore with Authentic Flavors</h2>
            <p className="lead">At Hotel Shubham, we believe in elevating the dining experience. From perfectly spiced Natukodi Curry to our signature Biryanis, every dish is crafted with passion.</p>
            <p>Our 3-floor dining facility ensures a comfortable, categorized experience for Veg and Non-Veg preferences, delivering premium taste at affordable prices.</p>
            <Link to="/about" className="btn-text">Discover Our Story <ArrowRight size={18}/></Link>
          </div>
          <div className="about-img_wrapper">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop" alt="Restaurant Interior" />
            <div className="experience-badge glass">
              <span>10+</span>
              <p>Years of Culinary<br/>Excellence</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Signature Dishes */}
      <section className="signature-dishes">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Signature Masterpieces
          </motion.h2>
          
          <div className="dishes-grid">
            {[
              { name: "Andhra Chicken Curry", price: "₹220", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop" },
              { name: "Mutton Fry Special", price: "₹350", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop" },
              { name: "Paneer Butter Masala", price: "₹200", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop" }
            ].map((dish, i) => (
              <motion.div 
                className="dish-card glass" 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="dish-img">
                  <img src={dish.img} alt={dish.name} />
                </div>
                <div className="dish-info">
                  <h3>{dish.name}</h3>
                  <span className="text-accent">{dish.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="center-btn">
             <Link to="/menu" className="btn btn-outline mt-4">Explore Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Review Snippet */}
      <section className="reviews-snippet container">
        <motion.div 
          className="review-banner glass"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="rating-wrap">
            <h2>4.5</h2>
            <div className="stars">
              <Star fill="var(--accent)" color="var(--accent)" />
              <Star fill="var(--accent)" color="var(--accent)" />
              <Star fill="var(--accent)" color="var(--accent)" />
              <Star fill="var(--accent)" color="var(--accent)" />
              <Star fill="var(--accent)" color="var(--accent)" />
            </div>
            <p>Based on 277+ Reviews</p>
          </div>
          <div className="quote-wrap">
             <p>"Low budget, tasty food, nice environment. The fried rice is very tasty and mutton soup is excellent."</p>
             <span>- Verified Customer</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
