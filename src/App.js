import { useEffect } from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import axios from "axios";
import Content from "./componets/Content/Content";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("/api")
  //     .then((response) => {
  //       console.log(response.data.users);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
