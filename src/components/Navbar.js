import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div style={{ width: "30%" }}>
        <h1 style={{ color: "#635DFF" }}>{"{CodeBase}"}</h1>
      </div>
      <div
        style={{
          width: "25%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/home" className="nav-link" style={{ color: "#635DFF" }}>
          Home
        </Link>
        <Link to="#" className="nav-link">
          About
        </Link>
        <Link to="#" className="nav-link">
          Contact
        </Link>
        <Link to="/Login">
          <button className="nav-btn" style={{ width: "70px" }}>
            Login
          </button>
        </Link>
        <Link to="/Signup">
          <button
            className="nav-btn"
            style={{ background: "#635DFF", width: "90px", color: "white" }}
          >
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
