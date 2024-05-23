const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

// middlewares
app.use(
  cors({
    origin: ["https://localhost:5000"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("bistro boss is ready to serve");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
