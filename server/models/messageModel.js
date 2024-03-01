const mongoose = require("mongoose");

// Define the schema for the "Messages" model
const MessageSchema = mongoose.Schema(
    {
        // Define the structure of the message field
        message: {
            text: { type: String, required: true }, // The text of the message is required
        },
        // Array to store user IDs involved in the conversation
        users: Array,
        // Reference to the sender user using their ObjectId
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", // Reference to the "User" model
            required: true,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt timestamps to the model
    }
);

// Export the Mongoose model for the "Messages" collection
module.exports = mongoose.model("Messages", MessageSchema);