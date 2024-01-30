const mongoose = require("mongoose");
const DB_KEY = require("./config");
mongoose.connect(DB_KEY);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
