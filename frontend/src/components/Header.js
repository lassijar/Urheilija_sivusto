import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="main-header">
      <ul>
        <li>
          <Link to="/" className="headerlink-title">
            Posts
          </Link>
        </li>
        <li>
          <Link to="add" className="headerlink-title">
            Add
          </Link>
        </li>
        <li>
          <Link to="delete" className="headerlink-title">
            Delete
          </Link>
        </li>
        <li>
          <Link to="put" className="headerlink-title">
            Put
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
