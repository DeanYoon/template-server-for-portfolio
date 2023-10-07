const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  password: String,
  text: String,
  time: { type: Date, default: Date.now }, // Add a time field with the current date/time
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
