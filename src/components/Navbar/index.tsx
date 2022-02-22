import React from "react";
import styles from "./styles";

const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper grey darken-4 px1" style={styles.divStyle}>
      <a href="/" className="brand-logo">Список дел</a>
      
    </div>
  </nav>
) 

export default Navbar
