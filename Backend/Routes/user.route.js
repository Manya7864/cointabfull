const express = require("express");
const userModel = require("../Model/user.model");
const userroute = express.Router();
const fetch = require("node-fetch");

userroute.post("/fetchdata", async (req, res) => {
  const { url } = req.body;
  console.log(url);
  const resp = await fetch("https://randomuser.me/api/");
  const data = await resp.json();
  const data1 = data.results;
  await userModel.insertMany(data1)
  res.send("fetchdata");
});

userroute.delete("/deletedata", async (req, res) => {
   const deletedata=await userModel.deleteMany()
    res.send("data delet");
  });

  userroute.get("/getdata", async (req, res) => {
    const getdata=await userModel.find()
     res.send(getdata);
   });

module.exports = userroute;
