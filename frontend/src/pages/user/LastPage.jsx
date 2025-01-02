import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LastPage() {
  const { current_user } = useSelector((state) => state.user);
  const { order_id } = useSelector((state) => state.order);
  const { stored_list, price } = useSelector((state) => state.cart);

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
                  <Col md={4} className="text-end text-secondary">
                    {current_user.name}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col as="h5" md={4}>
                    Address
                  </Col>
                  <Col md={8} className="text-end text-secondary">
                    {`${current_user.country} | ${current_user.city} | ${current_user.street}`}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col as="h5" md={8}>
                    Email
                  </Col>
                  <Col md={4} className="text-end text-secondary">
                    {current_user.email}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col as="h5" md={8}>
                    Method
                  </Col>
                  <Col md={4} className="text-end text-secondary">
                    {"Bkash"}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
        <Col md={6} className="pt-4">
          <ListGroup>
            <ListGroup.Item>
              <Row as="h2" className="p-2">
                Order Summary
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="pt-2">
                <Col md={4} className="text-start text-secondary">
                  {"Date"}
                </Col>
                <Col md={4} className="text-center text-secondary">
                  {"Order Number"}
                </Col>
                <Col md={4} className="text-end text-secondary">
                  {"Payment Method"}
                </Col>
              </Row>
              <Row className="pb-2">
                <Col as="h6" md={4} className="text-start">
                  {new Date().toISOString().split("T")[0]}
                </Col>
                <Col as="h6" md={4} className="text-center">
                  {order_id}
                </Col>
                <Col as="h6" md={4} className="text-center">
                  {"Bkash"}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {stored_list.map((element) => (
                <Row key={element.Id} className="pt-2">
                  <Row>
                    <Col as="h5" md={8}>
                      {element.product.name}
                    </Col>
                    <Col md={4} className="text-center">
                      <strong>${element.product.price * element.items}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-secondary" md={12}>
                      Qty:{element.items}
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
                  {price}
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
                  {price + 40}
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
