import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://news-portal-server-lac.vercel.app/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });

  return (
    <div>
      <h3>All Category</h3>
      <Nav defaultActiveKey="/home" className="flex-column">
        {categories.map((category) => (
          <Nav.Link key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default LeftSideNav;
