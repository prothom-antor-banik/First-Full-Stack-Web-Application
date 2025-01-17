import React, { useState, useEffect } from "react";
import { Row, Col, Form, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllSummaryProducts } from "../redux/thunk/summaryThunk";
import base from "../configure";

function ProductCarousel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, pages } = useSelector((state) => state.summary);

  const [by, setBy] = useState("items");
  const [sort, setSort] = useState("DESC");

  useEffect(() => {
    dispatch(
      getAllSummaryProducts(
        sort === "DESC" ? (pages > 1 ? pages - 1 : 1) : 1,
        by,
        sort
      )
    );
  }, [by, sort]);

  return (
    <Row>
      <Row as="h2" className="p-2">
        Products
      </Row>
      <Row className="p-2">
        <Col md={2}>
          <strong>Sort:</strong>
        </Col>
        <Col md={4}>
          <Form.Control
            as="select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="DESC">DESC</option>
            <option value="ASC">ASC</option>
          </Form.Control>
        </Col>
        <Col md={2}>
          <strong>Field:</strong>
        </Col>
        <Col md={4}>
          <Form.Control
            as="select"
            value={by}
            onChange={(e) => setBy(e.target.value)}
          >
            <option value="items">Items</option>
            <option value="rating">Rating</option>
          </Form.Control>
        </Col>
      </Row>
      <Row className="p-2">
        <Carousel fade>
          {products.slice(0, 5).map((product) => {
            return (
              <Carousel.Item
                key={product.Id}
                onClick={() => navigate(`/product/${product._id}`)}
                interval={1000}
                className="d-flex justify-content-center"
              >
                <img
                  height={150}
                  width={200}
                  src={base + product.product_image}
                />
                <Carousel.Caption>
                  <h6>{product.product_name}</h6>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Row>
    </Row>
  );
}

export default ProductCarousel;
