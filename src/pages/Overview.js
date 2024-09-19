import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";

export default function Overview() {
  return (
    <div>
      <Card bg="info" text="white" style={{ width: "30rem" }}>
        <Card.Header>Overview page</Card.Header>
        <Card.Body>
          <Card.Title>intro </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
