// import rooms model
const Room = require("../models/roomsModel");

// DEFINE CONTROLLER FUNCTIONS

exports.listAllRooms = (req, res) => {
Room.find({}, (err, room) => {
  console.log("list all rooms")
  if (err) {
  res.status(500).send(err);
  }
  res.status(200).json(room);
  });
};

exports.createNewRoom = (req, res) => {
  let newRoom = new Room (req.body);
  console.log("create new room");
  newRoom.save((err, room) => {
  if (err) {
    res.status(500).send(err);
  }
  res.status(201).json(room);
  });
};