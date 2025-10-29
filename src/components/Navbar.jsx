import React, { useState } from 'react';
import './Navbar.css';
import cart from "../../src/components/assets/cart.png";
import logo from "../../src/components/assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // default set to "Home"
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt='yes' className='lg'/>
        <p>AgriLab2</p>
      </div>

      <ul className='navmenu'>
        <li onClick={() => setMenu("Home")}>
          <Link style={{ textDecoration:"none" }} to="/">Home</Link>
          {menu === "Home" ? <hr/> : null}
        </li>

        <li onClick={() => setMenu("Products")}>
          <Link style={{ textDecoration:"none" }} to="/products">Products</Link>
          {menu === "Products" ? <hr/> : null}
        </li>

        <li onClick={() => setMenu("About Us")}>
          <Link style={{ textDecoration:"none" }} to="/about-us">About Us</Link>
          {menu === "About Us" ? <hr/> : null}
        </li>

        <li onClick={() => setMenu("Contact Us")}>
          <Link style={{ textDecoration:"none" }} to="/contact-us">Contact Us</Link>
          {menu === "Contact Us" ? <hr/> : null}
        </li>

        {/* New My Account link */}
        <li onClick={() => setMenu("My Account")}>
          <Link style={{ textDecoration:"none" }} to="/account">My Account</Link>
          {menu === "My Account" ? <hr/> : null}
        </li>
      </ul>

      <div className='cart'>
        <Link to="/signup">
          <button className='btn'>SignUp</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt='cart' className='imgi'/>
        </Link>
        <div className='cartcount'>0</div>
      </div>
    </div>
  );
}

export default Navbar;

