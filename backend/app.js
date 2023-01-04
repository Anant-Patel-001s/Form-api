const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
const port = 8000;

app.get("/", (req, res) => {
  res.send({ message: "server is running!" });
});

const db = require("./models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log("Can't Connect to Databse!", err);
    process.exit();
  });

const formidable = require("express-formidable");
app.use(formidable());

require("./routes.js/registration.routes")(app);

app.listen(port, () => {
  console.log("Server is Listening!");
});
