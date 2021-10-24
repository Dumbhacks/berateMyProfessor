'use strict';

// create App function
module.exports = function(app) {
    var rooms = require('../controllers/controllers.js');

    // app
    // .route("/rooms")
    // .get(rooms.listAllRooms)
    // .post(rooms.createRoom);

    app.get("/rooms", (req, res) => {
      console.log("rooms get")
      return rooms.listAllRooms;
    })

    app.post("/rooms", (req, res) => {
      return rooms.createNewRoom;
    })
}