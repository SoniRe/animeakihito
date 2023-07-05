import { useEffect } from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("/api")
      .then((response) => {
        console.log(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
