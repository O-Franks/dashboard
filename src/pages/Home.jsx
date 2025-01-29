import React, { useState, useEffect } from "react";
import "../pages/Pages.css/Home.css";
import Card from "react-bootstrap/Card";

export default function Home() {
  const [readyCount, setReadyCount] = useState(0);
  const [joke, setJoke] = useState("");

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
      <Card text="black" style={{ backgroundColor: "#f4f4f9", height: 1000 }}>
        <Card.Header>Home</Card.Header>
        <div className="home-container">
          <header className="home-header">
            <h1>My Apprentice Dashboard</h1>
          </header>
          <main className="home-main">
            <p>
              Hello, my name is Oliver Franks. I am a aspiring software
              Developer. Welcome to my personal website where you can learn more
              About me and my work.
            </p>
          </main>

          <button className="button-71">Click for more info</button>
        </div>

        <Card.Body></Card.Body>
      </Card>
    </div>
  );
}
