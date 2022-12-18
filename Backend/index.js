const express = require("express");
const userroute = require("./Routes/user.route");
const connection = require("./Config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userroute);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to server");
  } catch (err) {
    console.log("Error in connection", err);
  }
  console.log(`Listen on port ${process.env.PORT}`);
});