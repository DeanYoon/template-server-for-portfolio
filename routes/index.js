var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Comment = require("./models/Comment");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index.html");
});

router.get("/comments", async (req, res, next) => {
  try {
    const comment = await Comment.find({});
    console.log(" = ", comment);
    if (comment) {
      res.send(comment);
    } else {
      res.send("No data found");
    }
  } catch (error) {
    console.log(error);
    res.send("No data");
  }
});

mongoose.connect(MONGODB_URL);
const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB✅");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

module.exports = router;
