import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <nav className="wrap">
      <div className="width_wrap">
        <div className="nav_wrap">
          <Link to="/">Home</Link>
          <Link to="/info">Infomation</Link>
        </div>
      </div>
    </nav>
  );
}
