import "./special.css";
import Card from "../Card/Card";

const Special = () => {
  return (
    <div className="special__section">
      <h3 className="special__heading">Special For You</h3>

      <div className="special__card">
        <Card
          name="Dragon Ball Z"
          img="https://u.livechart.me/anime/3632/poster_image/1d855a93b6a083fddf6a232f164a9a2c.jpg/small.jpg"
          genre="1989, Action"
        />

        <Card
          name="SPY x FAMILY Cour 2"
          img="https://u.livechart.me/anime/10954/poster_image/0af3d9f8a83d405f254df5bd73a6f587.webp/small.jpg"
          genre="2022, Comedy"
        />

        <Card
          name="Demon Slayer: Train Arc"
          img="https://u.livechart.me/anime/10420/poster_image/d10b4ca2522c54a4bd4fa82b720528e9.webp/small.jpg"
          genre="2023, Action"
        />

        <Card
          name="Great Teacher Onizuka"
          img="https://u.livechart.me/anime/3642/poster_image/b3bb18bdce12d2696e23daf4c41b711d.webp/small.jpg"
          genre="1999, Comedy"
        />

        <Card
          name="Call of the Night"
          img="https://u.livechart.me/anime/10883/poster_image/8a2297167d715467b2ac48473f676c79.png/small.jpg"
          genre="2022, Romance"
        />

        <Card
          name="My Dress-Up Darling"
          img="https://u.livechart.me/anime/10531/poster_image/c416608257ed698c64ed341424469dfd.webp/small.jpg"
          genre="2018, Comedy"
        />

        <Card
          name="Scissor Seven"
          img="https://u.livechart.me/anime/9787/poster_image/8fcba37819ba0dbae312779a33d0c74e.jpg/small.jpg"
          genre="2022, Romance"
        />
      </div>
    </div>
  );
};

export default Special;
