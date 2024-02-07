require("dotenv").config();
const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
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
