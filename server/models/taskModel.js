const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   location: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      required: true,
   },
   participant: {
      type: String,
      required: true,
   },
   note: {
      type: String,
      required: true,
   },
   picture: {
      type: String,
      required: true,
   }
});
module.exports = mongoose.model("Task", taskSchema, "tasks");
