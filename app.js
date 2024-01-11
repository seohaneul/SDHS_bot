const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/keyboard", (req, res) => {
  const data = { menu: "맛있는거" };
  res.json(data);
});

app.listen(process.env.PORT || 3000, () =>
  console.log("node on " + process.env.PORT)
);
