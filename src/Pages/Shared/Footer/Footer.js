import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/category/:id" className="nav-link px-2 text-muted">
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news/:id" className="nav-link px-2 text-muted">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2022 News Portal, Inc</p>
      </footer>
    </div>
  );
};

export default Footer;
