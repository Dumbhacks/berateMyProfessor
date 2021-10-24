'use strict';
// import rooms model
const Room = require("../models/roomsModel");
const bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create App function
module.exports = function(app) {
    var rooms = require('../controllers/controllers.js');

    app.get("/rooms", urlencodedParser, (req, res) => {
      Room.find({}, (err, room) => {
        console.log("list all rooms")
        if (err) {
        res.status(500).send(err);
        }
        res.status(200).json(room);
        });
      })
    .post("/rooms", urlencodedParser, (req, res) => {
      console.log(req.body);
      let newRoom = new Room(req.body);
      console.log("create new room");
      newRoom.save((err, room) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).send(req.body);
      });
    });
}