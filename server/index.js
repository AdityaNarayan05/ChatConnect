const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const app = express();
const socket = require("socket.io");
const path = require('path');
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB Connection Success-full");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// -----------------------Deployment-------------------------

const __dirname1 = path.resolve();
// console.log(__dirname1);
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname1,"/public/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname1,"public","build","index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.send("It is working");
    });
}

// -----------------------Deployment-------------------------

const port= process.env.PORT || 5000;
const server = app.listen(port, () =>
    console.log(`Server started on ${port}`)
);

const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-recieve", data.msg);
        }
    });
});