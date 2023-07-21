import "./App.css";
import Header from "./componets/Header/Header";
import Content from "./componets/Content/Content";
import Section from "./componets/Section/Section";
import Featured from "./componets/Featured/Featured";
import { special, trending } from "./fetchAPI";

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
    </div>
  );
}

export default App;
