import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import UserData from "../components/UserData";
import UserForm from "../components/UserForm";
import "./Pages.css/Messages.css";

function Messages() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("/api/user-data");
      const response = await request.json();

      if (request.ok) {
        setUser(response);
      } else {
        console.log("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Card
        style={{ backgroundColor: "#f4f4f9", minHeight: "100vh" }}
        text="black"
      >
        <Card.Header>Messages</Card.Header>
        <h3 className="text">
          Please fill out a form to add to the messages list:{" "}
        </h3>
        <div className="message-container">
          <div className="data-form">
            {user.slice(0, 4).map((user) => (
              <UserData key={user.id} data={user} />
            ))}
          </div>
          <div className="user-form">
            <UserForm />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Messages;
