// Import message controller functions
const { addMessage, getMessages } = require("../controllers/messageController");

// Import Express.js Router
const router = require("express").Router();

// Define routes for message actions

// Route to add a new message (POST /api/messages/addmsg)
router.post("/addmsg/", addMessage);

// Route to get messages between specified users (POST /api/messages/getmsg)
router.post("/getmsg/", getMessages);

// Export the router
module.exports = router;