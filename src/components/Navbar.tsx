import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper grey darken-4 px1">
      <a href="/" className="brand-logo">Todo list</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/">Список дел</a></li>
        <li><a href="/">Информация</a></li>
      </ul>
    </div>
  </nav>
) 
