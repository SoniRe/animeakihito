import React from "react";
import "./catalog.css";

const Catalog = () => {
  return (
    <div id="main">
      <div id="left">
        <h1>Catalog</h1>

        <div className="dropdown">
          <div id="year">
            <h2>Year</h2>
            <i class="ri-arrow-down-s-line"></i>
          </div>

          <div className="dropdown-menu">
            <h3>2020</h3>
            <h3>2022</h3>
          </div>
        </div>
      </div>
      <div id="right"></div>
    </div>
  );
};

export default Catalog;
