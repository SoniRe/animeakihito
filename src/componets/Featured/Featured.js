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
              className="anime__image1"
            />

            <img
              src="https://u.livechart.me/anime/3340/poster_image/f825ebb80730709d8743d5fcb5f9d0ca.png/small.jpg"
              alt="anime image"
              className="anime__image2"
            />
            <img
              src="https://u.livechart.me/anime/1307/poster_image/91c494ab39a9a3ea7973cf220b996791.png/small.jpg"
              alt="anime image"
              className="anime__image3"
            />
          </div>
        </a>
        <a href="">
          <div id="item2">
            <h2>
              Top 20 <br /> Romance Anime
            </h2>
            <img
              src="https://u.livechart.me/anime/11175/poster_image/9aa135b23d83333d281c0020f22d041d.webp/small.jpg"
              alt="anime image"
              className="anime__image1"
            />

            <img
              src="https://u.livechart.me/anime/4485/poster_image/e393f6f59c288a3bed632bd763a5397e.png/small.jpg"
              alt="anime image"
              className="anime__image2"
            />

            <img
              src="https://u.livechart.me/anime/3595/poster_image/763f76e3b938422ac518e887e2268d86.jpg/small.jpg"
              alt="anime image"
              className="anime__image3"
            />
          </div>
        </a>
        <a href="">
          <div id="item3">
            <h2>
              The Best <br /> Classic Animes
            </h2>

            <img
              src="https://u.livechart.me/anime/3639/poster_image/ef77af19deb2c4094c7b0f88c34a5f45.png/small.jpg"
              alt="anime image"
              className="anime__image1"
            />

            <img
              src="https://u.livechart.me/anime/10420/poster_image/d10b4ca2522c54a4bd4fa82b720528e9.webp/small.jpg"
              alt="anime image"
              className="anime__image2"
            />

            <img
              src="https://u.livechart.me/anime/945/poster_image/41cb2b9695f63f779d4c77c819cb4ff3.webp/small.jpg"
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
