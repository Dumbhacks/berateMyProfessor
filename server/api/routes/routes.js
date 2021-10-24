'use strict';
// import rooms model
const Room = require("../models/roomsModel");
const bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create App function
module.exports = function(app) {
    var rooms = require('../controllers/controllers.js');

    app.get("/rooms", jsonParser, (req, res) => {
      Room.find({}, (err, room) => {
        if (err) {
        res.status(500).send(err);
        }
        res.status(200).json(room);
        });
      })

    app.post("/rooms", jsonParser, (req, res) => {
      let newRoom = new Room(req.body);
      newRoom.save((err, room) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(201).send(req.body);
      });
    });

    app.post("/question/:roomid", jsonParser, (req, res) => {
      console.log(req.body, req.params.roomid);
      Room.findOneAndUpdate({"roomID": req.params.roomid},
        {"$addToSet":{"questions":req.body}}, (err) => {
          // console.log("uh oh");
          // console.log(err);
          res.status(500).send(err);
        });
    })
}