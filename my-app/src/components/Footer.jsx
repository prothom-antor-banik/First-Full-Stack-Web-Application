import React from "react";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row>
      <Col className="p-2 bg-dark text-white position-fixed bottom-0 text-center">
        ~ Copyright &copy; 2024 ~
      </Col>
    </Row>
  );
}

export default Footer;
