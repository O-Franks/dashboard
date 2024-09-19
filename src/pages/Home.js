import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <div>
      <Card bg="success" text="white" style={{ width: "30rem" }}>
        <Card.Header>My home page</Card.Header>
        <Card.Body>
          <Card.Title>intro </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Img src="https://static.vecteezy.com/system/resources/previews/010/925/820/non_2x/colorful-welcome-design-template-free-vector.jpg" />
        </Card.Body>
      </Card>
    </div>
  );
}
