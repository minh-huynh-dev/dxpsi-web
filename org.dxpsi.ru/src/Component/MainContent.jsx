import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function MainContent() {
  return (
    <Container className = "mt-3">
      <Row>
        <Col>
          <Link to="create">
            <Button>Create User</Button>
          </Link>
        </Col>
        <Col>
        <Link to="delete">
            <Button>Delete User</Button>
          </Link>
        </Col>
        <Col>
        <Link to="list">
            <Button>List All User</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;
