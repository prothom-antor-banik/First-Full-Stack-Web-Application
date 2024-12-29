import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LastPage() {
  const location = useLocation();

  const initalState = {
    name: "",
    email: "",
    address: "",
    method: "",
    encode: "",
    order_number: 0,
    sub_total: 0,
  };

  const summary_order = Object.keys(location.state).length
    ? location.state
    : initalState;

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Row className="p-3 justify-content-center align-items-center">
        <Col md={5} className="pt-3">
          <Row as="h1" className="pb-2">
            Thank You For Your Purchase!
          </Row>
          <Row>
            <ListGroup>
              <ListGroup.Item>
                <Row as="h2" className="p-2">
                  Billing Details
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col as="h5" md={8}>
                    Name
                  </Col>
                  <Col md={4} className="text-center text-secondary">
                    {summary_order.name}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col as="h5" md={8}>
                    Address
                  </Col>
                  <Col md={4} className="text-center text-secondary">
                    {summary_order.address}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col as="h5" md={8}>
                    Email
                  </Col>
                  <Col md={4} className="text-center text-secondary">
                    {summary_order.email}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col as="h5" md={8}>
                    Method
                  </Col>
                  <Col md={4} className="text-center text-secondary">
                    {summary_order.method}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
        <Col md={5} className="pt-4">
          <ListGroup>
            <ListGroup.Item>
              <Row as="h2" className="p-2">
                Order Summary
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="pt-2">
                <Col md={4} className="text-secondary">
                  {"Date"}
                </Col>
                <Col md={4} className="text-secondary">
                  {"Order Number"}
                </Col>
                <Col md={4} className="text-secondary">
                  {"Payment Method"}
                </Col>
              </Row>
              <Row className="pb-2">
                <Col as="h6" md={4}>
                  {new Date().toISOString().split("T")[0]}
                </Col>
                <Col as="h6" md={4}>
                  {summary_order.order_number}
                </Col>
                <Col as="h6" md={4}>
                  {summary_order.method}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {summary_order.encode.split("-").map((str) => (
                <Row key={str.split(":")[0]} className="pt-2">
                  <Row>
                    <Col as="h5" md={8}>
                      {str.split(":")[1]}
                    </Col>
                    <Col md={4} className="text-center">
                      <strong>${str.split(":")[2] * str.split(":")[3]}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-secondary" md={12}>
                      Qty:{str.split(":")[3]}
                    </Col>
                  </Row>
                </Row>
              ))}
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col md={8} as="p" className="text-secondary">
                  Sub Total
                </Col>
                <Col md={4} as="p" className="text-secondary">
                  {summary_order.sub_total}
                </Col>
              </Row>
              <Row>
                <Col md={8} as="p" className="text-secondary">
                  Extra
                </Col>
                <Col md={4} as="p" className="text-secondary">
                  40
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col md={8} as="h4">
                  Order Total
                </Col>
                <Col md={4} as="h4">
                  {summary_order.sub_total + 40}
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default LastPage;
