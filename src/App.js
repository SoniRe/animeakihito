import "./App.css";
import Header from "./componets/Header/Header";
import Content from "./componets/Content/Content";
import Section from "./componets/Section/Section";
import Featured from "./componets/Featured/Featured";
import Footer from "./componets/Footer/Footer";
import { special, trending, popular } from "./fetchAPI";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeStream from "./componets/AnimeStream/AnimeStream";
import bg from "./assets/bg.webp";
import PosterPhoto from "./assets/test1.jpeg";
import Testimonials from "./componets/Testimonials/Testimonials";
import Newsletter from "./componets/Footer/Newsletter/Newsletter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="back">
              <div id="App">
                <img className="bg" src={bg} alt="" />
                <div id="front-part">
                  <Header />
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
              <Newsletter />
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/video" element={<AnimeStream />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
