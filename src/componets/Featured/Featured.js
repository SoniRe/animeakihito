import React from "react";
import "./featured.css";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.jpeg";
const Featured = () => {
  return (
    <div id="featured">
      <h2>Featured Collections</h2>

      <div id="collections">
        <a href="">
          <div id="item1">
            <h2>
              The Best <br /> Bikes
            </h2>

            <img
              src={image1}
              alt="anime image"
              className="anime__image1"
            />

            <img
              src={image2}
              alt="anime image"
              className="anime__image2"
            />
            <img
              src={image3}
              alt="anime image"
              className="anime__image3"
            />
          </div>
        </a>
        <a href="">
          <div id="item2">
            <h2>
              Top 20 <br /> Budget Bikes
            </h2>
            <img
              src={image1}
              alt="anime image"
              className="anime__image1"
            />

            <img
              src={image2}
              alt="anime image"
              className="anime__image2"
            />

            <img
              src={image3}
              alt="anime image"
              className="anime__image3"
            />
          </div>
        </a>
        <a href="">
          <div id="item3">
            <h2>
              The Best <br /> Classic Bikes
            </h2>

            <img
              src={image1}
              alt="anime image"
              className="anime__image1"
            />

            <img
              src={image2}
              alt="anime image"
              className="anime__image2"
            />

            <img
              src={image3}
              alt="anime image"
              className="anime__image3"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Featured;
