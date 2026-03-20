import { motion } from 'framer-motion';
import { Star, ThumbsUp, MoreVertical } from 'lucide-react';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    name: "Raju K.",
    time: "2 weeks ago",
    rating: 5,
    text: "Low budget tasty food nice environment. Best place in Nellore for family dining.",
    avatar: "R"
  },
  {
    id: 2,
    name: "Priya S.",
    time: "1 month ago",
    rating: 5,
    text: "Fried rice very tasty, mutton soup excellent. Ordered the Natukodi curry and it was perfectly spiced! Highly recommend.",
    avatar: "P"
  },
  {
    id: 3,
    name: "Venkatesh Babu",
    time: "3 months ago",
    rating: 4,
    text: "Food is very authentic Andhra style. Great variety in veg and non-veg. Just one issue: service delay during peak weekend hours, but worth the wait.",
    avatar: "V"
  },
  {
    id: 4,
    name: "Anusha M.",
    time: "4 months ago",
    rating: 5,
    text: "Amazing ambiance across all 3 floors. The mocktails and Tiffins are surprisingly good too. A premium experience.",
    avatar: "A"
  }
];

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="page-header">
        <div className="header-overlay"></div>
        <motion.div 
          className="header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Customer Reviews</h1>
          <p>See what our guests have to say</p>
        </motion.div>
      </div>

      <div className="container">
        
        {/* Rating Summary Block */}
        <motion.div 
          className="rating-summary-glass"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="summary-score">
            <h2>3.4</h2>
            <div className="stars">
              <Star fill="#fbbc04" color="#fbbc04" size={24} />
              <Star fill="#fbbc04" color="#fbbc04" size={24} />
              <Star fill="#fbbc04" color="#fbbc04" size={24} />
              <Star fill="url(#half)" color="#fbbc04" size={24} />
              <Star color="#fbbc04" size={24} />
            </div>
            <span>277 Google reviews</span>
          </div>

          {/* SVG for half star */}
          <svg width="0" height="0">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#fbbc04" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="summary-bars">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <div className="bar-row" key={i}>
                <span>{star}</span>
                <div className="bar-bg">
                  <div className={`bar-fill w-${star}`}></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Review Cards Grid */}
        <div className="reviews-grid">
          {reviewsData.map((review, i) => (
            <motion.div 
              className="review-card"
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="card-header">
                <div className="reviewer-info">
                  <div className="avatar">{review.avatar}</div>
                  <div>
                    <h4>{review.name}</h4>
                    <span>{review.time}</span>
                  </div>
                </div>
                <button className="icon-btn"><MoreVertical size={18} color="#9aa0a6" /></button>
              </div>

              <div className="card-stars">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index} 
                    fill={index < review.rating ? "#fbbc04" : "transparent"} 
                    color={index < review.rating ? "#fbbc04" : "#e0e0e0"} 
                    size={14} 
                  />
                ))}
              </div>

              <p className="card-text">{review.text}</p>
              
              <div className="card-footer">
                <button className="action-btn"><ThumbsUp size={16} /> Helpful</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-5" style={{ marginTop: '4rem' }}>
          <button className="btn btn-primary" style={{ borderRadius: '30px' }}>Write a Review</button>
        </div>

      </div>
    </div>
  );
};

export default Reviews;
