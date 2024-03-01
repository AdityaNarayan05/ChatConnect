import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";

/**
 * App component handles routing using React Router.
 */
export default function App() {
  return (
    <BrowserRouter>
      {/* Define routes using the Routes and Route components */}
      <Routes>
        {/* Route for the Register page */}
        <Route path="/register" element={<Register />} />

        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the SetAvatar page */}
        <Route path="/setAvatar" element={<SetAvatar />} />

        {/* Default route, renders the Chat page */}
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}