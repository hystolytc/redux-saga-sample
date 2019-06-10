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
        <Link to="/shopping-cart">
          <i className="fa fa-shopping-basket btn__baseket" />
        </Link>
          <span className={`cart-number ${itemTotal ? "cart-number--active" : ""}`}>{itemTotal}</span>
      </div>
    </header>
  );
};

export default Header;
