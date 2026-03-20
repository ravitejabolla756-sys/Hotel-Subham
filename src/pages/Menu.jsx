import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Flame } from 'lucide-react';
import './Menu.css';

const chickenImg = "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop";
const vegCurryImg = "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?q=80&w=800&auto=format&fit=crop";
const specialImg = "https://images.unsplash.com/photo-1589301760014-d929f39ce9b0?q=80&w=800&auto=format&fit=crop";
const tiffinImg = "https://images.unsplash.com/photo-1589302168068-964664d93cb0?q=80&w=800&auto=format&fit=crop";
const riceImg = "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=800&auto=format&fit=crop";
const noodlesImg = "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop";

const menuData = [
  // Indian Curries (Non-Veg)
  { id: 1, name: "Butter Chicken", price: "₹260", category: "Indian Curries", diet: "non-veg", tags: ["Popular"], desc: "Rich and creamy tomato-based curry.", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 2, name: "Chicken Curry (Boneless)", price: "₹260", category: "Indian Curries", diet: "non-veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 3, name: "Kadai Chicken", price: "₹280", category: "Indian Curries", diet: "non-veg", tags: ["Spicy"], desc: "Cooked with bell peppers and whole spices.", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 4, name: "Mutton Curry", price: "₹340", category: "Indian Curries", diet: "non-veg", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 5, name: "Fish Curry", price: "₹300", category: "Indian Curries", diet: "non-veg", desc: "Authentic coastal style fish curry.", img: "https://images.unsplash.com/photo-1620894580123-466ad3a0ca06?auto=format&fit=crop&q=80&w=1000" },
  { id: 6, name: "Prawns Curry", price: "₹340", category: "Indian Curries", diet: "non-veg", img: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=400&h=400&auto=format&fit=crop" },
  
  // Indian Curries (Veg)
  { id: 7, name: "Paneer Butter Masala", price: "₹200", category: "Indian Curries", diet: "veg", tags: ["Best Seller"], img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 8, name: "Kadai Paneer", price: "₹220", category: "Indian Curries", diet: "veg", tags: ["Spicy"], img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 9, name: "Mushroom Masala", price: "₹180", category: "Indian Curries", diet: "veg", img: "https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 10, name: "Dal Tadka", price: "₹160", category: "Indian Curries", diet: "veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 11, name: "Veg Kolhapuri", price: "₹200", category: "Indian Curries", diet: "veg", tags: ["Spicy"], img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=400&h=400&auto=format&fit=crop" },

  // Andhra Specials
  { id: 12, name: "Andhra Chicken Curry", price: "₹220", category: "Andhra Specials", diet: "non-veg", tags: ["Spicy", "Popular"], img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 13, name: "Natukodi Curry", price: "₹280", category: "Andhra Specials", diet: "non-veg", tags: ["Specials"], desc: "Traditional country chicken curry.", img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 14, name: "Mutton Fry", price: "₹350", category: "Andhra Specials", diet: "non-veg", tags: ["Best Seller"], img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 15, name: "Fish Fry", price: "₹220", category: "Andhra Specials", diet: "non-veg", img: "https://images.unsplash.com/photo-1765265432607-cdc1060294ba?auto=format&fit=crop&q=80&w=1000" },
  { id: 16, name: "Egg Curry", price: "₹80", category: "Andhra Specials", diet: "non-veg", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=400&h=400&auto=format&fit=crop" },

  // Tiffins
  { id: 17, name: "Idly (2)", price: "₹25", category: "Tiffins", diet: "veg", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 18, name: "Dosa", price: "₹50", category: "Tiffins", diet: "veg", img: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 19, name: "Masala Dosa", price: "₹60", category: "Tiffins", diet: "veg", tags: ["Popular"], img: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 20, name: "Poori", price: "₹40", category: "Tiffins", diet: "veg", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 21, name: "Chapati", price: "₹30", category: "Tiffins", diet: "veg", img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 22, name: "Set Dosa Chicken Curry", price: "₹230", category: "Tiffins", diet: "non-veg", tags: ["Specials"], desc: "A heavenly combination of soft dosas and chicken.", img: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=400&h=400&auto=format&fit=crop" },

  // Noodles & Rice
  { id: 23, name: "Veg Fried Rice", price: "₹160", category: "Noodles & Rice", diet: "veg", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 24, name: "Egg Fried Rice", price: "₹170", category: "Noodles & Rice", diet: "non-veg", img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 25, name: "Chicken Fried Rice", price: "₹200", category: "Noodles & Rice", diet: "non-veg", tags: ["Best Seller"], img: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 26, name: "Mixed Fried Rice", price: "₹230", category: "Noodles & Rice", diet: "non-veg", desc: "Chicken, Mutton, and Egg mix.", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 27, name: "Veg Noodles", price: "₹160", category: "Noodles & Rice", diet: "veg", img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=400&h=400&auto=format&fit=crop" },
  { id: 28, name: "Chicken Noodles", price: "₹200", category: "Noodles & Rice", diet: "non-veg", img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=400&h=400&auto=format&fit=crop" },
];

const categories = ["All", "Indian Curries", "Andhra Specials", "Tiffins", "Noodles & Rice"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDiet, setActiveDiet] = useState("All");

  const filteredMenu = menuData.filter((item) => {
    const matchCategory = activeCategory === "All" || item.category === activeCategory;
    const matchDiet = activeDiet === "All" || item.diet.toLowerCase() === activeDiet.toLowerCase();
    return matchCategory && matchDiet;
  });

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="menu-header-overlay"></div>
        <motion.div 
          className="menu-header-content text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Menu</h1>
          <p>Discover the authentic flavors of Nellore</p>
        </motion.div>
      </div>

      <div className="container menu-container">
        {/* Filters */}
        <div className="filters-container">
          <div className="filter-group">
            <h3>Categories</h3>
            <div className="filter-tabs">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <h3>Dietary</h3>
            <div className="filter-tabs diets">
              <button 
                className={`filter-btn ${activeDiet === 'All' ? 'active' : ''}`}
                onClick={() => setActiveDiet('All')}
              >
                All
              </button>
              <button 
                className={`filter-btn veg ${activeDiet === 'Veg' ? 'active' : ''}`}
                onClick={() => setActiveDiet('Veg')}
              >
                <Leaf size={16} /> Veg
              </button>
              <button 
                className={`filter-btn non-veg ${activeDiet === 'Non-Veg' ? 'active' : ''}`}
                onClick={() => setActiveDiet('Non-Veg')}
              >
                <Flame size={16} /> Non-Veg
              </button>
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="menu-grid">
          <AnimatePresence>
            {filteredMenu.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="menu-card glass"
                key={item.id}
              >
                <img src={item.img} alt={item.name} className="menu-card-img" />
                <div className="menu-card-content">
                  <div className="menu-card-header">
                    <div className="title-row">
                      <span className={`diet-icon ${item.diet}`}></span>
                      <h3>{item.name}</h3>
                    </div>
                    <span className="price text-accent">{item.price}</span>
                  </div>
                  
                  {item.desc && <p className="menu-desc">{item.desc}</p>}
                  
                  {item.tags && (
                    <div className="tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className={`tag ${tag.toLowerCase().replace(' ', '-')}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredMenu.length === 0 && (
          <div className="no-results text-center py-5">
             <h3>No dishes found for this combination.</h3>
             <button className="btn btn-primary mt-4" onClick={() => { setActiveCategory("All"); setActiveDiet("All"); }}>Reset Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
