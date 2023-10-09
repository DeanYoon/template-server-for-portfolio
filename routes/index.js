var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Comment = require("./models/Comment");
require("dotenv").config();
const cors = require("cors");
const { default: axios } = require("axios");

const MONGODB_URL = process.env.MONGODB_URL;
const apiKey = process.env.REACT_APP_NEWS_API_KEY;

/* GET home page. */

router.use(
  cors({
    origin: [
      "http://127.0.0.1:3000",
      "http://localhost:3000",
      "https://portfolio-ver2-chi.vercel.app",
      "https://portfolio-ver2-nejwksxb2-deanyoon.vercel.app",
      "https://portfolio-ver2-a5v0t5iq2-deanyoon.vercel.app",
    ],
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],
    credentials: true,
  })
);

router.get("/", async (req, res, next) => {
  try {
    const comment = await Comment.find({});

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

router.get("/news/:lang", async (req, res, next) => {
  const { lang } = req.params;

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${lang}&apiKey=${apiKey}`
    );

    if (response) {
      res.send(response.data.articles);
    } else {
      res.send("No data found");
    }
  } catch (error) {
    console.log(error);
    res.send("No data");
  }
});

router.post("/", async (req, res) => {
  const comment = req.body;

  try {
    const newComment = await Comment.create(comment);
    res.send(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).send("fail");
  }
});

router.post("/delete", async (req, res) => {
  const { password, text } = req.body;

  try {
    const response = await Comment.findOneAndDelete({
      text: text,
      password: password,
    });
    if (response) {
      res.send(response);
    } else {
      res.status(500).send("no data found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("fail");
  }
});

mongoose.connect(MONGODB_URL);
const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB✅");
const handleError = (error) => console.log("DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

module.exports = router;
