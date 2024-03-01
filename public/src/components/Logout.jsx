import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";

// Logout component responsible for handling user logout
const Logout = () => {
  const navigate = useNavigate();

  // Function to handle the click event for logging out
  const handleClick = async () => {
    // Get user ID from localStorage
    const id = await JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))._id;

    // Send a request to the logout route with the user ID
    const data = await axios.get(`${logoutRoute}/${id}`);

    // If the logout request is successful (status 200), clear localStorage and navigate to login
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };

  // Render a button with a logout icon, triggers the handleClick function on click
  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
};

// Styled button component for the logout button
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #123123;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;

export default Logout;