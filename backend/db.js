const mongoose = require("mongoose");
const { DB_URI } = require("./config");
mongoose.connect(DB_URI);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
