import React, { useState, useEffect } from "react";
import "../pages/Pages.css/Home.css";
import Card from "react-bootstrap/Card";

export default function Home() {
  const [readyCount, setReadyCount] = useState(0);
  const [joke, setJoke] = useState("");

  function loggedIn() {
    setReadyCount((count) => count + 1);
    alert("You're now logged in, Welcome!");
  }

  function loggedOut() {
    setReadyCount((count) => count - 1);
    alert("You're now logged out, Goodbye!");
  }

  const api = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const response = await data.json();
    setJoke(`${response.setup}... ${response.punchline}`);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div>
      <Card text="white" style={{ backgroundColor: "#A5D6A7" }}>
        <Card.Header>Home</Card.Header>
        <Card.Body>
          <Card.Title>intro </Card.Title>
          <Card.Text>Hello and Welcome to my Apprentice Dashboard.</Card.Text>
          <div className="buttons">
            <button type="buttton" class="btn btn-secondary" onClick={loggedIn}>
              sign in
            </button>

            <button
              type="buttton"
              class="btn btn-secondary"
              onClick={loggedOut}
            >
              sign out
            </button>
          </div>
          <Card.Text>The number of people signed are {readyCount}</Card.Text>
          <Card.Text>Here is a joke for you: {joke}</Card.Text>

          <Card.Img
            style={{ width: 500 }}
            src="https://static.vecteezy.com/system/resources/previews/010/925/820/non_2x/colorful-welcome-design-template-free-vector.jpg"
          />
        </Card.Body>
      </Card>
    </div>
  );
}
