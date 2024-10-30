import React from "react";

import "../pages/Pages.css/Overview.css";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Pie from "../Img/Pie.png";
// import KSB from "..//Img/KSB.png";
// import Portfolio from "../Img/Portfolio.png";

export default function Overview() {
  return (
    <div>
      <Card bg="info" text="white">
        <Card.Header>Overview</Card.Header>
        <Card.Body>
          <Card.Title>intro </Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Messages</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Complete OTJ KSB mapping for July/August</td>
                <td className="highP">High</td>
              </tr>
              <tr>
                <td>Complete OTJ hours for last week</td>
                <td className="highP">High</td>
              </tr>
              <tr>
                <td>
                  Complete final two sections of introduction document in
                  portfolio
                </td>
                <td className="normal">Standard</td>
              </tr>
              <tr>
                <td>Complete OKR's weekly and record on OTJ logs</td>
                <td className="normal">Standard</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>RAG Rating</th>
                <th>Tasks Outstanding</th>
                <th>Sessions Outstanding</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="green">Progressing well</td>
                <td className="green">None - great job</td>
                <td className="highP">1</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <div className="image-table">
            <Card.Img className="pie" src={Pie} />
            <br />
            <div className="table-split">
              <Table compact className="tableP">
                <thead>
                  <tr>
                    <th>OTJ Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ahead by 1.5 hours</td>
                  </tr>
                  <tr>
                    <td>Achieved 49.5 of 348</td>
                  </tr>
                  <tr>
                    <td>0 weeks wihtout log</td>
                  </tr>
                </tbody>
              </Table>
              <Table compact className="tablePP">
                <thead>
                  <tr>
                    <th>Time to EPA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14 months</td>
                  </tr>
                  <tr>
                    <td>Gateaway date: 26 Oct 2025</td>
                  </tr>
                  <tr>
                    <td>Expected End Date: 26 jan 2026</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <br />
          <Table>
            <thead>
              <tr>
                <th>Start Date</th>
                <th>Main Training - 14% completed</th>
                <th>EPA Gateway</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="orange">26 Jul 2024</td>
                <td className="orange-blue">14% completed</td>
                <td className="orange">26 Oct 2025</td>
              </tr>
            </tbody>
          </Table>
          <br />
          <div className="image-table-two">
            <Table className="tableP">
              <thead>
                <tr>
                  <th>KSB Matrix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="newRed">Behind by -3%</td>
                </tr>
                <tr>
                  <td>Achieved 0 of 34</td>
                </tr>
              </tbody>
            </Table>

            <Table className="tableP">
              <thead>
                <tr>
                  <th>Portfolio Matrix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="newRed">Behind by -3%</td>
                </tr>
                <tr>
                  <td>Achieved 0 of 34</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
