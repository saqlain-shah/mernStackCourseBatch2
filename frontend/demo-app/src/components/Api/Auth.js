import React, { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
const MessageDisplay = () => {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await axios
        .get("http://localhost:8800/api/user/checkauthentication")
        .then((response) => {
          console.log("Response", response.data);
          setMessage(response.data);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={fetchMessage}>
        Check Authentication
      </Button>
      <div>
        <p>{message}!</p>
      </div>
    </div>
  );
};

export default MessageDisplay;
