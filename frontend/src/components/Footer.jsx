import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Footer({ pages = 0, page = 0, setPage = null }) {
  let buttons = [];
  for (let i = 1; i <= pages; i++) {
    buttons.push(
      <Button
        variant={i === page ? "dark" : "secondary"}
        key={i}
        onClick={() => setPage(i)}
      >
        {i}
      </Button>
    );
  }

  const navigate = useNavigate();

  return (
    <Row className="py-2 position-absolute bottom-0">
      {pages ? (
        <Row className="justify-content-center">
          <Col md="auto">
            <ButtonGroup>
              <Button
                variant="gray"
                onClick={() => {
                  if (page > 1) navigate(-1);
                }}
              >
                <i className="bi bi-skip-backward" />
              </Button>
              {buttons}
              <Button
                variant="gray"
                onClick={() => {
                  if (page < pages) navigate(1);
                }}
              >
                <i className="bi bi-skip-forward" />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      ) : (
        <Row></Row>
      )}
      <Row className="py-1">
        <Col className="bg-dark text-white text-center">
          ~ Copyright &copy; 2024 ~
        </Col>
      </Row>
    </Row>
  );
}

export default Footer;
