const express = require("express");
port = 8000;

const app = express();

app.get("/", function (req, res) {
  res.send("<h1> whaoo , It is running ): </h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>This is contact page..  </h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1> Yep! this is about page .. </h1>");
});

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server", err);
  }
  console.log(`awesome!! my express server running on ${port}`);
});
