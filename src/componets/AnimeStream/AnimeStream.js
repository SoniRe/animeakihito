import React from "react";

const AnimeStream = () => {
  return (
    <div>
      <h1>Anime Stream</h1>
      <video
        id="videoPlayer"
        controls
        src="https://firebasestorage.googleapis.com/v0/b/animeaikhito.appspot.com/o/One%20Punch%20Man%20Season%201%2Fone-punch-man-dub-episode-1.mp4?alt=media&amp;token=80f0e3ea-64e8-4cb5-8cb3-0e25312a161b"
      ></video>
    </div>
  );
};

export default AnimeStream;
