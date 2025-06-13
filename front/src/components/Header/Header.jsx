import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>E-Shop</Link>

        {/* Toggle Button */}
        <button onClick={toggleMenu} className={styles["menu-toggle"]}>
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Nav Links */}
        <nav
          className={`${styles.nav} ${menuOpen ? styles.mobile : ""}`}
        >
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/shop" onClick={toggleMenu}>Shop</Link>
            </li>
            <li>
              <Link to="/cart" onClick={toggleMenu}>
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
