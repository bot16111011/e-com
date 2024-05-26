import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/products" className="logo">E-shop</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Products</Link>
        <Link to="/cart" className="cart-link">
          <img src="/cart.svg" alt="cart" />
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
