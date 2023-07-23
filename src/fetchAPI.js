const special = [
  {
    name: "Dragon Ball Z",
    img: "https://u.livechart.me/anime/3632/poster_image/1d855a93b6a083fddf6a232f164a9a2c.jpg/small.jpg",
    genre: "1989, Action",
  },
  {
    name: "SPY x FAMILY Cour 2",
    img: "https://u.livechart.me/anime/10954/poster_image/0af3d9f8a83d405f254df5bd73a6f587.webp/small.jpg",
    genre: "2022, Comedy",
  },
  {
    name: "Demon Slayer: Train Arc",
    img: "https://u.livechart.me/anime/10420/poster_image/d10b4ca2522c54a4bd4fa82b720528e9.webp/small.jpg",
    genre: "2023, Action",
  },
  {
    name: "Great Teacher Onizuka",
    img: "https://u.livechart.me/anime/3642/poster_image/b3bb18bdce12d2696e23daf4c41b711d.webp/small.jpg",
    genre: "1999, Comedy",
  },
  {
    name: "Call of the Night",
    img: "https://u.livechart.me/anime/10883/poster_image/8a2297167d715467b2ac48473f676c79.png/small.jpg",
    genre: "2022, Romance",
  },
  {
    name: "My Dress-Up Darling",
    img: "https://u.livechart.me/anime/10531/poster_image/c416608257ed698c64ed341424469dfd.webp/small.jpg",
    genre: "2018, Romance",
  },
  {
    name: "Scissor Seven",
    img: "https://u.livechart.me/anime/9787/poster_image/8fcba37819ba0dbae312779a33d0c74e.jpg/small.jpg",
    genre: "2022, Comedy",
  },
];

const trending = [
  {
    name: "My Hero Academia",
    img: "https://u.livechart.me/anime/1895/poster_image/5992761094c8639ead781e52764e9684.webp/small.jpg",
    genre: "2014, Super Power",
  },
  {
    name: "One Piece",
    img: "https://u.livechart.me/anime/321/poster_image/b121b16f4061e35e27b6d758b2e9503a.jpg/small.jpg",
    genre: "1997, Adventure",
  },
  {
    name: "Naruto",
    img: "https://u.livechart.me/anime/3585/poster_image/c7ab94434f13b0052c70a48e2c9c20e6.jpg/small.jpg",
    genre: "2023, Action",
  },
  {
    name: "Fullmetal Alchemist",
    img: "https://u.livechart.me/anime/3406/poster_image/19cde12c1bb6f1b9d654ef33aa71bece.webp/small.jpg",
    genre: "2003, Military",
  },
  {
    name: "Cowboy Bebop",
    img: "https://u.livechart.me/anime/3418/poster_image/d4bf2f9a15e904838b829ee7e90584a2.png/small.jpg",
    genre: "1998, Sci-Fi",
  },
  {
    name: "Death Note",
    img: "https://u.livechart.me/anime/3437/poster_image/ea9acd1ccea844fd9c4debde5e8e631e.png/small.jpg",
    genre: "2006, Mystery",
  },
  {
    name: "One Punch Man",
    img: "https://u.livechart.me/anime/1431/poster_image/784a83c62b5b549e86eed8922e206280.jpg/small.jpg",
    genre: "2015, Comedy",
  },
];

const popular = [
  {
    name: "Jujustsu Kaisen S2",
    img: "https://u.livechart.me/anime/11083/poster_image/86c97d56c1258a659daebe115cc4c071.webp/small.jpg",
    genre: "2023, Fantasy",
  },
  {
    name: "Steins;Gate",
    img: "https://u.livechart.me/anime/1554/poster_image/721563bd590b779bed8ed69e8eea0511.png/small.jpg",
    genre: "2011, Sci-Fi",
  },
  {
    name: "A Silent Voice",
    img: "https://u.livechart.me/anime/1296/poster_image/dd617ef095a2a52d2907640f09d12d57.jpg/small.jpg",
    genre: "2016, Drama",
  },
  {
    name: "Attack on Titan S3",
    img: "https://u.livechart.me/anime/3558/poster_image/c29afaa349001436c56feac1d18b3530.png/small.jpg",
    genre: "2019, Military",
  },
  {
    name: "Your Name",
    img: "https://u.livechart.me/anime/1956/poster_image/366fb971db2eec5dc00122da338ddfc1.jpg/small.jpg",
    genre: "2016, Romance",
  },
  {
    name: "Oshi no Ko",
    img: "https://u.livechart.me/anime/11247/poster_image/22853bac5b0b7072b53a871fb832650a.webp/small.jpg",
    genre: "2023, Showbiz",
  },
  {
    name: "Hunter x Hunter",
    img: "https://u.livechart.me/anime/317/poster_image/9f2b1a4969989c1f43849b105d04d655.jpg/small.jpg",
    genre: "2011, Adventure",
  },
  {
    name: "Attack on Titan Finale",
    img: "https://u.livechart.me/anime/9491/poster_image/71a31556e1a91348654ca39b1612c763.jpg/small.jpg",
    genre: "2020, Military",
  },
  {
    name: "Kaguya-sama: Love is War",
    img: "https://u.livechart.me/anime/10191/poster_image/00986133f888880b4ce24881b63e6de9.webp/small.jpg",
    genre: "2022, Romance",
  },
  {
    name: "Mob Psyco 100 S2",
    img: "https://u.livechart.me/anime/3163/poster_image/e9aeefbbc4f16e75b641c2862566ad55.jpg/small.jpg",
    genre: "2019, Comedy",
  },
  {
    name: "Jujustsu Kaisen",
    img: "https://u.livechart.me/anime/9680/poster_image/28f487fe3996b4e4cc119edccd9d71da.jpg/small.jpg",
    genre: "2020, School",
  },
  {
    name: "Bleach S2",
    img: "https://u.livechart.me/anime/9844/poster_image/c02c4a5726581716b39b2ee48a088206.webp/small.jpg",
    genre: "2022, Supernatural",
  },
  {
    name: "Mushoku Tensei S2",
    img: "https://u.livechart.me/anime/10297/poster_image/85ba7e3a92fd25d640904248daf4e514.jpg/small.jpg",
    genre: "2021, Isekai",
  },
  {
    name: "Code Geass S2",
    img: "https://u.livechart.me/anime/3584/poster_image/565576a295c95cf8932902745e35957a.png/small.jpg",
    genre: "2006, Mecha",
  },
  {
    name: "My Hero Academia",
    img: "https://u.livechart.me/anime/1895/poster_image/5992761094c8639ead781e52764e9684.webp/small.jpg",
    genre: "2014, Super Power",
  },
  {
    name: "Vinland Saga",
    img: "https://u.livechart.me/anime/3169/poster_image/32e38a9ae36edb9152a007e124c9d41a.jpg/small.jpg",
    genre: "2019, Historical",
  },
  {
    name: "Violet Evergarden",
    img: "https://u.livechart.me/anime/2197/poster_image/b2d5f918ca3a8912630d40afbc962e23.jpg/small.jpg",
    genre: "2018, Slice of Life",
  },
  {
    name: "Kaguya-sama S2",
    img: "https://u.livechart.me/anime/9649/poster_image/0ef760cc224d5294ea0f8d1083bd3fca.webp/small.jpg",
    genre: "2020, Romance",
  },
  {
    name: "Spy x Family",
    img: "https://u.livechart.me/anime/10456/poster_image/cdeaf17feb183f5d8ea30d23dce135a3.jpg/small.jpg",
    genre: "2022, Childcare",
  },
  {
    name: "Clannad",
    img: "https://u.livechart.me/anime/3588/poster_image/9ecea7d8d4334fb13392a17d3b723fbb.png/small.jpg",
    genre: "2008, Romance",
  },
  {
    name: "The Promised Neverland",
    img: "https://u.livechart.me/anime/3226/poster_image/a5fb7cfa3dbb4d1e19fe0440da5a26f7.webp/small.jpg",
    genre: "2019, Survival",
  },
];

export { special, trending, popular };
