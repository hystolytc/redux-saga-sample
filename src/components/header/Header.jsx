import React from "react";
import { Link } from 'react-router-dom'
import "./header.scss";

const Header = ({itemTotal}) => {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/shopping-cart">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
      <div className="basket-container">
        <i className="fa fa-shopping-basket btn__baseket" />
        <span className={`cart-number ${itemTotal ? "cart-number--active" : ""}`}>{itemTotal}</span>
      </div>
    </header>
  );
};

export default Header;
