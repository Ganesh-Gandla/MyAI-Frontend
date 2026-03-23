import { useState } from "react";
import { NavLink } from "react-router";
import "../style/NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        
        

        {/* Hamburger */}
        <div 
          className={`hamburger ${isOpen ? "open" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </div>

        {/* Logo */}
        <div className="logo">MyAI</div>
      </nav>
    </>
  );
}

export default NavBar;