const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Server is running on port: 3000");
});

app.get("/", (req, res) => {
  res.send("requested data");
});

app.get("/items", (req, res) => {
  res.json(req);
});
