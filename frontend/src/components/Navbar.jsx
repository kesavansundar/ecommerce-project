import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navigate= useNavigate();
  const { cartCount } = useCart();
  const handleLogout= ()=>{
    localStorage.removeItem('token');
    navigate('/')
  }

  return (
    <nav className="main-navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-mark">S</span>
          <span>Shop<span className="logo-accent">Hub</span></span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggle"
          type="button"
          aria-controls="navbarMenu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        {/* Navigation */}
        <div className={`navbar-collapse ${menuOpen ? "is-open" : ""}`} id="navbarMenu">

          <ul className="navbar-links">

            <li>
                <Link to="/home" className="navbar-link active" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
                <Link to="/products" className="navbar-link" onClick={closeMenu}>
                Products
              </Link>
            </li>

            <li>
                <Link to="/categories" className="navbar-link" onClick={closeMenu}>
                Categories
              </Link>
            </li>

            <li>
                <Link to="/wishlist" className="navbar-link" onClick={closeMenu}>
                  Wishlist
              </Link>
            </li>

            <li>
                <Link to="/cart" className="navbar-link cart-link" onClick={closeMenu}>
                Cart
                <span className="cart-count">{cartCount}</span>
              </Link>
            </li>

          </ul>

          {/* Auth Buttons */}
          <div className="navbar-actions">

            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;