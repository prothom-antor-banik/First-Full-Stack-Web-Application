import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Footer({ pages = 0, page = 0, setPage = null }) {
  const navigate = useNavigate();

  return (
    <Row className="py-2 position-absolute bottom-0">
      {pages ? (
        <Row className="justify-content-center">
          <Col md="auto">
            <ButtonGroup>
              <Button
                variant="dark"
                onClick={() => {
                  if (page > 1) navigate(-1);
                }}
              >
                <i className="bi bi-skip-backward" />
              </Button>
              {[...Array(pages).keys()].map((ele) => (
                <Button
                  variant={ele === page ? "dark" : "light"}
                  key={ele}
                  onClick={() => setPage(ele)}
                >
                  {ele + 1}
                </Button>
              ))}
              <Button
                variant="dark"
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
