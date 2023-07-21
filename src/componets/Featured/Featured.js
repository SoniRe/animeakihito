import React from "react";
import "./featured.css";

const Featured = () => {
  return (
    <div id="featured">
      <h2>Featured Collections</h2>

      <div id="collections">
        <a href="">
          <div id="item1">
            <h2>
              The Best <br /> Mystical Anime
            </h2>

            <img
              src="https://u.livechart.me/anime/3627/poster_image/3c499f677336ed08ba4c414efb7d46d8.jpg/small.jpg"
              alt="anime image"
            />

            <img
              src="https://u.livechart.me/anime/3340/poster_image/f825ebb80730709d8743d5fcb5f9d0ca.png/small.jpg"
              alt="anime image"
            />
            <img
              src="https://u.livechart.me/anime/1307/poster_image/91c494ab39a9a3ea7973cf220b996791.png/small.jpg"
              alt="anime image"
            />
          </div>
        </a>
        <a href="">
          <div id="item2">
            <h2>
              Top 20 <br /> Romance Anime
            </h2>
          </div>
        </a>
        <a href="">
          <div id="item3">
            <h2>
              The Best <br /> Classic Animes
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Featured;
