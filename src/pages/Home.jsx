import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => (
  <div className="home">
    <h1>Welcome to Our Product Showcase</h1>
    <p>Discover a wide range of amazing products and manage them easily.</p>
    <div className="navigation-buttons">
      <Link to="/contact">
        <button className="nav-btn">Go to Contact</button>
      </Link>
      <Link to="/products">
        <button className="nav-btn">Go to Products</button>
      </Link>
    </div>
  </div>
);

export default Home;
