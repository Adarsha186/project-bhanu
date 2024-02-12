import React from "react";
import { NavLink } from "react-router-dom";

const ShopDropdown = () => {
  return (
    <div className="shop-dropdown">
      <NavLink to="/category/cpo" className="shop-dropdown-item">
        Cold Pressed Oils
      </NavLink>
      <NavLink to="/category/nfoods" className="shop-dropdown-item">
        Natural Foods
      </NavLink>
      <NavLink to="/category/fertilizers" className="shop-dropdown-item">
        Natural Fertilizers
      </NavLink>
      <NavLink to="/category/indian-mangoes" className="shop-dropdown-item">
        Indian Mangoes
      </NavLink>
      <NavLink to="/category/sp" className="shop-dropdown-item">
        Spirulina Products
      </NavLink>
      <NavLink to="/category/indian-mangoes" className="shop-dropdown-item">
        Essential Oils
      </NavLink>
    </div>
  );
};

export default ShopDropdown;