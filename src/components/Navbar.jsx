import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h2 className="logo">🛒 FreshMart</h2>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={close}>Home</Link></li>
        <li><Link to="/products" onClick={close}>Products</Link></li>
        <li><Link to="/about" onClick={close}>About</Link></li>
        <li><Link to="/contact" onClick={close}>Contact</Link></li>
        <li><Link to="/cart" onClick={close}>Cart ({totalItems})</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;