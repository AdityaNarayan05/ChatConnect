# ChatConnect - Chat Application

ChatConnect is a real-time chat application built using React, Node.js, Socket.io, and MongoDB. It allows users to engage in instant messaging with each other, enabling seamless communication and connection.

## Features

* Real-time messaging: Experience fast and responsive messaging with real-time updates using Socket.io.
* User authentication: Secure user registration and login using the Node.js backend with MongoDB for data storage.
* Avatar support: Users can set and display their avatars to personalize their chat experience.
* Online status: See the online/offline status of other users for better communication.
* Message history: Access the chat history to review past conversations.

## Technologies Used

* **Frontend** : React, HTML, CSS
* **Backend** : Node.js, Express
* **Real-time Communication** : Socket.io
* **Database** : MongoDB

## How to Run the Application

Follow the steps below to set up and run the ChatConnect application:

### Prerequisites

* Node.js and npm installed on your local machine.
* MongoDB database or a MongoDB Atlas account for cloud-based storage.

### Steps

1. Clone the repository to your local machine.
2. Install frontend and backend dependencies.
3. Set up environment variables. Create a `.env` file in the `backend` directory and add the following variables: Replace `your_mongodb_uri` with your MongoDB connection string, and `your_secret_key` with a strong secret key for JWT authentication.
4. Start the backend server. The backend server should now be running at `http://localhost:5000`.
5. Start the frontend development server. The frontend development server should now be running at `http://localhost:3000`.
6. Open `http://localhost:3000` in your web browser.

You should now be able to access the ChatConnect application and start using it to chat with other users.
