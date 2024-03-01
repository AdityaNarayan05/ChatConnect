const mongoose = require("mongoose");

// Define the schema for the "Users" model
const userSchema = new mongoose.Schema({
    // Username field with validation constraints
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    // Email field with validation constraints
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    // Password field with validation constraints
    password: {
        type: String,
        required: true,
        min: 8,
    },
    // Flag to indicate whether the user has set an avatar image
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    // Field to store the avatar image URL
    avatarImage: {
        type: String,
        default: "",
    },
});

// Export the Mongoose model for the "Users" collection
module.exports = mongoose.model("Users", userSchema);