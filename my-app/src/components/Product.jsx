import React from "react";
import { Image, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <Row className="p-2 justify-content-center border shadow-sm rounded">
      <Row className="my-2">
        <Link
          className="text-dark text-decoration-none"
          to={`product/${product.Id}`}
        >
          <Image src={"http://127.0.0.1:8000" + product.image} fluid />
        </Link>
      </Row>
      <Row as="h5" className="my-2">
        {product.name}
      </Row>
      <Row className="mb-2">{product.price}</Row>
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
