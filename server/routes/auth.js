// Import user controller functions
const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut,
} = require("../controllers/userController");

// Import Express.js Router
const router = require("express").Router();

// Define routes for user actions

// Route for user login (POST /api/auth/login)
router.post("/login", login);

// Route for user registration (POST /api/auth/register)
router.post("/register", register);

// Route to get all users except the current user by ID (GET /api/auth/allusers/:id)
router.get("/allusers/:id", getAllUsers);

// Route to set the avatar for a user by ID (POST /api/auth/setavatar/:id)
router.post("/setavatar/:id", setAvatar);

// Route to log out a user by ID (GET /api/auth/logout/:id)
router.get("/logout/:id", logOut);

// Export the router
module.exports = router;