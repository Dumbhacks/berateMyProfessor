'use strict';
// Import mongoose
const mongoose = require("mongoose");

// Declare schema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
const QuestionSchema = new Schema({
  questionID: Number,
  timestamp: Date,
  message: String,
  tags: [String]
})

const RoomsSchema = new Schema({
  roomID: Number,
  roomName: String,
  questions: [QuestionSchema]
});


// create and export model
module.exports = mongoose.model("roomsModel", RoomsSchema);