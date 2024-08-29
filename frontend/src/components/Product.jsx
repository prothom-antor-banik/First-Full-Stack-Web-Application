import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <Row className="p-2 justify-content-center border shadow-sm rounded">
      <Row className="my-2 text-center">
        <Link
          className="text-dark text-decoration-none"
          to={`product/${product.Id}`}
        >
          <Image
            src={"http://127.0.0.1:8000" + product.image}
            width="50%"
            fluid
          />
        </Link>
      </Row>
      <Row as="h5" className="my-2">
        {product.name}
      </Row>
      <Row className="mb-2">
        <Col md={6} className="d-flex justify-content-center bg-light">
          <section>
            <i className="bi bi-currency-dollar px-1"></i>
            {product.price}
          </section>
        </Col>
        <Col md={6} className="d-flex justify-content-center bg-light">
          <section>
            <i className="bi bi-star-half px-1" />
            {product.rating}
          </section>
        </Col>
      </Row>

      <Row className="mb-2">
        <Button
          variant="dark"
          onClick={() => navigate(`/product/${product.Id}`)}
        >
          Details
        </Button>
      </Row>
    </Row>
  );
}

export default Product;
