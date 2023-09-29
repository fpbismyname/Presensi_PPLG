import React from "react";
// import '../styles/pages.css';
import "../styles/Dashboard_1.css";
import pplg_icon from "../assets/icon.ico";
import { Card, Container } from "react-bootstrap";

const Dashboard_1 = () => {
  return (
    <div className="D1">
      <Container className="my-auto">
        <Card>
          <Card.Img src={pplg_icon} />
          <Card.Title>PPLG</Card.Title>
          <Card.Subtitle>Pengembangan Perangkat Lunak dan Gim</Card.Subtitle>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
        </Card>
      </Container>
    </div>
  );
};

export default Dashboard_1;
