const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const app = express();

// Import routes
const foodRoute = require("./routes/food");

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(path.join(__dirname, "client/build")));

// Use routes
app.use("/food/", foodRoute);

app.listen(port, () => {
  console.log("App is listening on port " + port);
});

module.exports = app;
