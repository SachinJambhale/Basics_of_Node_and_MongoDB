const express = require("express");
const bodyparser = require("body-parser");
require("./models/db");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(bodyparser.json());

app.use(function (req, res, next) {
  console.log(req.method + " request received...");
  next();
});

app.use(cors());
app.use("/api/users", require("./routes/user.route"));
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
