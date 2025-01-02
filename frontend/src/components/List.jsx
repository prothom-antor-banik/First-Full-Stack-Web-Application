import React from "react";
import { Row, Col, Image, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import base from "../configure";

function List({ order }) {
  const navigate = useNavigate();

  return (
    <Row className="p-3" hidden={order.isShown}>
      <ListGroup>
        {order.product_list.map((product) => (
          <ListGroup.Item key={product.Id}>
            <Row className="p-2">
              <Col md={2}>
                <Image src={base + product.image} width="50%" fluid />
              </Col>
              <Col md={2} className="text-center">
                {order.user.name}
              </Col>
              <Col md={2} className="text-center">
                {product.name}
              </Col>
              <Col
                md={2}
                className="text-center"
              >{`${order.user.city} - ${order.user.street}`}</Col>
              <Col md={1} className="text-center">
                {product.price}
              </Col>
              <Col md={1} className="text-center">
                {product.items}
              </Col>
              <Col md={1} className="text-center">
                <Button
                  onClick={() => navigate(`/product/${product.Id}`)}
                  variant="dark"
                >
                  Review
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Row>
  );
}

export default List;
