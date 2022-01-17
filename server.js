const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "views", "home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "views", "login.html"));
});

app.listen(9000, console.log(9000));
