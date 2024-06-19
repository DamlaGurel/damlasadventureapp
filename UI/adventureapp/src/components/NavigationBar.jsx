import React from "react";
import {Link} from "react-router-dom";
import "../assets/styles/navigationBar.scss";

const NavigationBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="menu">
          <div className="logo">Logo</div>
          <div className="brand">Brand</div>
          <Link to="/my-adventures">My Adventures</Link>

          <Link to="/new-adventure-plan">New Adventure Planning</Link>
          <Link to="/edit-adventure-plan">Edit Adventure Planning</Link>

          <div>Settings</div>
          <div>Logout</div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
