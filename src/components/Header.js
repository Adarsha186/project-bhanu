import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import sq_logo from '../images/square_logo.jpg';
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import '../styles/Header.css';
import ShopDropdown from "./ShopDropdown";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#fbf5e7' }}>
      <Link to="/" className="navbar-brand">
        <img src={sq_logo} alt="logo1" style={{ maxHeight: '150px', maxWidth: '150px' }} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto mr-lg-0 text-lg-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}> 
      <Nav className="ml-auto mr-lg-0 text-lg-center">
          <NavDropdown title="Shop" id="collasible-nav-dropdown" className="header-link">
            <NavDropdown.Item>
              <Link to="/category/cpo" className="nav-link">Cold Pressed Oils</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/category/nfoods" className="nav-link">Natural Foods</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/category/fertilizers" className="nav-link">Natural Fertilizers</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/category/indian-mangoes" className="nav-link">Indian Mangoes</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/category/sp" className="nav-link">Spirulina Products</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/category/essential-oils" className="nav-link">Essential Oils</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
          <NavItem className="header-link">
            <Link to="/about" className="nav-link text-lg-center">About Us</Link>
          </NavItem>
          <NavItem className="header-link">
            <Link to="/contact-us" className="nav-link text-lg-center">Contact Us</Link>
          </NavItem>
          <NavItem className="header-link">
            <Link to="/wholesale" className="nav-link text-lg-center">Wholesale</Link>
          </NavItem>
        </Nav>
        <Nav className="ml-lg-auto">
          <NavItem>
            <Link to={!user && '/login'} className="nav-link" onClick={handleAuthentication}>
              <div className="user-container">
                  <span className="font-weight-bold text-dark">Hello {!user ? 'Guest' : user.email}</span>
                  <span className="font-weight-bold text-dark">{user ? 'Sign Out' : 'Sign In'}</span>
              </div>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/orders' className="nav-link">
              <span className="font-weight-bold text-dark">Returns</span>
              <span className="font-weight-bold text-dark">& Orders</span>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/checkout" className="nav-link">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;