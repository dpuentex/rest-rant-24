require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Rest Rant world!");
});

//Loads the places controller
app.use("/places", require("./controllers/places"));

// Wildcard /404 route
app.get("*", (req, res) => {
  console.log("user resqueste an unknown route: ", req.url);
  res.status(404).send("<h1>404 Page<h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost${process.env.PORT}`);
});
