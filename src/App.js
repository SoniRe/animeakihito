import "./App.css";
import Header from "./componets/Header/Header";
import Content from "./componets/Content/Content";
import Section from "./componets/Section/Section";
import Featured from "./componets/Featured/Featured";
import Footer from "./componets/Footer/Footer";
import { special, trending, popular } from "./fetchAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeStream from "./componets/AnimeStream/AnimeStream";
import PosterPhoto from "./assets/test1.jpeg";
import Video from "./assets/back-video.mp4";
import Catalog from "./componets/Catalog/Catalog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="back">
              <div id="App">
                <video autoPlay muted loop src={Video}></video>
                <div id="front-part">
                  <Content />
                </div>
              </div>
              <Section
                name="Special For You"
                content={special}
                class="special__card"
              />
              <Featured />
              <Section
                name="Trending Now"
                content={trending}
                class="special__card"
              />
              <Section
                name="Most Popular"
                content={popular}
                class="mostPopularOuter"
              />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/video" element={<AnimeStream />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
