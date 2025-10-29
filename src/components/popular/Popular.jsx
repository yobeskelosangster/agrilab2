import React, { useState } from "react";
import "./Popular.css"; // import the CSS file

const Popular = () => {
  // Example product data
  const [products] = useState([
    { id: 1, name: "Fresh Maize", price: 50, image: "https://via.placeholder.com/200" },
    { id: 2, name: "Tomatoes", price: 30, image: "https://via.placeholder.com/200" },
    { id: 3, name: "Groundnuts", price: 80, image: "https://via.placeholder.com/200" },
  ]);

  const handleBuy = (product) => {
    alert(`You want to buy: ${product.name} for $${product.price}`);
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Available Products</h1>


      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">Price: ${product.price}</p>
            <button onClick={() => handleBuy(product)} className="buy-btn">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;



