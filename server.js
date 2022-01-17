const express = require("express");
const app = express();
const port = 9000;
const bodyParser = require("body-parser");
const jsw = require("jsonwebtoken");
const home = require("./routes/home");
const login = require("./routes/login");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(home);
app.use(login);

app.listen(port, () => {
  console.log(`running at https://localhost:${port}`);
});
