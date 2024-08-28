import React from "react";
import { Row, Col, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Footer({ pages = 0, page = 0, setPage = null }) {
  const navigate = useNavigate();

  return (
    <div className="position-absolute bottom-0 vw-100">
      {pages ? (
        <Row className="justify-content-center">
          <Col md="auto">
            <Pagination>
              <Pagination.Prev
                onClick={() => {
                  if (page > 1) navigate(-1);
                }}
              />
              {[...Array(pages).keys()].map((ele) => (
                <Pagination.Item
                  key={ele}
                  active={ele + 1 === page}
                  onClick={() => setPage(ele)}
                >
                  {ele + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => {
                  if (page < pages) navigate(1);
                }}
              />
            </Pagination>
          </Col>
        </Row>
      ) : (
        <Row></Row>
      )}
      <Row>
        <Col className="p-2 bg-dark text-center text-white">
          ~ Copyright &copy; 2024 ~
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
