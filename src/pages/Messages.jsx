import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Pages.css/Messages.css";

function Messages() {
  const [message, setMessage] = useState("");

  const handleEvent = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <Card style={{ backgroundColor: "#A5D6A7", height: 1000 }} text="white">
        <Card.Header>Messages</Card.Header>
        <h3>Please fill out a form to add to the messages list: </h3>

        <div className="border">
          <form className="form">
            <div class="form-group">
              <label for="date">Date</label>
              <input type="email" class="form-control" id="date" />
            </div>

            <div class="form-group">
              <label for="Message">Message</label>
              <input type="email" class="form-control" id="date" />
            </div>
          </form>
          <button type="button" className="submit">
            Submit
          </button>
        </div>

        <h2>{message}</h2>
      </Card>
    </div>
  );
}

export default Messages;
