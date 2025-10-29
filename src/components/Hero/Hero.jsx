import React, { useState, useEffect } from "react";
import "./hero.css";

// import your images
import or from "../../components/assets/or.jpg";
import mai from "../../components/assets/mai.jpg";
import zee from "../../components/assets/zee.webp";

const Hero = () => {
  const images = [or, mai, zee];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="hero">
      <img
        src={images[currentIndex]}
        alt="slideshow"
        className="hero-bg"
      />

      <div className="hero-overlay">
        <h2 className="hero-title">WELCOME TO AGRILAB2 MW</h2>
        <p className="hero-sub">Get your farm products from us</p>

        {/* 🌟 Centered Search Bar */}
        <form onSubmit={handleSearch} className="hero-search">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="hero-input"
          />
          <button type="submit" className="hero-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
