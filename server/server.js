const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send("Hi my name is Aditya");
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

//console.warn("This is a warning")
//document.write("hi")
