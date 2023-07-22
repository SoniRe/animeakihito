import "./App.css";
import Header from "./componets/Header/Header";
import Content from "./componets/Content/Content";
import Section from "./componets/Section/Section";
import Featured from "./componets/Featured/Featured";
import Footer from "./componets/Footer/Footer";
import { special, trending, popular } from "./fetchAPI";

function App() {
  return (
    <div className="back">
      <div className="App">
        <Header />
        <Content />
      </div>
      <Section name="Special For You" content={special} />
      <Featured />
      <Section name="Trending Now" content={trending} />
      <Section name="Most Popular" content={popular} />
      <Footer />
    </div>
  );
}

export default App;
