import React, { useState } from "react";
import "./Products.css";

// Sample product data
const productsData = [
  {
    id: 1,
    name: "Fresh Maize",
    price: 120,
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
  },
  {
    id: 2,
    name: "Organic Tomatoes",
    price: 80,
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    id: 3,
    name: "Green Spinach",
    price: 50,
    img: "https://images.unsplash.com/photo-1592928301807-1f13a09b8e77",
  },
  {
    id: 4,
    name: "Fresh Milk",
    price: 200,
    img: "https://images.unsplash.com/photo-1589927986089-35812388d1d0",
  },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [modalImage, setModalImage] = useState(null);

  // Filter products based on search input
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.img}
              alt={product.name}
              onClick={() => setModalImage(product.img)}
            />
            <h3>{product.name}</h3>
            <p className="price">MK {product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Product" />
        </div>
      )}
    </div>
  );
};

export default Products;

