const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sargunssethi:6h2jViIP5W7KbOsE@cluster0.axjkkr8.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
