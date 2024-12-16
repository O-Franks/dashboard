import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "./Pages.css/Messages.css";

function Messages() {
  const [message, setMessage] = useState({
    date: "",
    message: "",
    priority: "",
  });
  const [messageList, setMessageList] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage((prevMessage) => ({ ...prevMessage, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageList((prev) => [...prev, message]);
    setMessage({ date: "", message: "", priority: "" });
  };

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessageList(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messageList));
  }, [messageList]);

  return (
    <div>
      <Card style={{ backgroundColor: "#A5D6A7", height: 1000 }} text="white">
        <Card.Header>Messages</Card.Header>
        <h3>Please fill out a form to add to the messages list: </h3>

        <form onSubmit={handleSubmit} className="border">
          <form className="form">
            <div class="form-group">
              <label for="date">Date</label>
              <input
                type="date"
                class="form-control"
                id="date"
                name="date"
                value={message.date}
                onChange={handleChange}
              />
            </div>

            <div class="form-group">
              <label for="Message">Message</label>
              <input
                type="text"
                class="form-control"
                id="message"
                name="message"
                value={message.message}
                onChange={handleChange}
              />
            </div>

            <div class="form-group">
              <label for="priority">Priority</label>
              <input
                type="text"
                class="form-control"
                id="priority"
                name="priority"
                value={message.priority}
                onChange={handleChange}
              />
            </div>
          </form>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
        <div className="Message-board">
          <h2 style={{ marginLeft: 20 }}>message board:</h2>

          <ul>
            {messageList.map((message, index) => (
              <li key={index}>
                {message.date} : {message.message} : {message.priority}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default Messages;
