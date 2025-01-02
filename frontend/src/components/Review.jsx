import React, { useState } from "react";
import { Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import { createComment } from "../redux/thunk/commentThunk";
import { partialUpdateProduct } from "../redux/thunk/productThunk";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Rating from "./Rating";

function Review({ productId, setToggle = null, toggle = null }) {
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.product);

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  function handleComment() {
    dispatch(
      createComment(
        {
          _id: uuidv4().toString(),
          userId: current_user.Id,
          userName: current_user.name,
          productId: productId,
          message: comment,
          rating: rating,
          date: new Date().toISOString().split("T")[0],
        },
        productId
      )
    );
    dispatch(
      partialUpdateProduct(productId, {
        rating: (
          (product.rating * product.rate_count + rating) /
          (product.rate_count + 1)
        ).toFixed(2),
        rate_count: product.rate_count + 1,
      })
    );
    setComment("");
    setRating(0);
    if (setToggle) setToggle(toggle);
  }

  return (
    <ListGroup className="p-2">
      <ListGroup.Item>
        <Row className="p-2 justify-content-center">
          <Col md={10}>
            <Row>
              <Form>
                <Form.Group className="p-2">
                  <Form.Label as="h6" className="fw-bold">
                    Write a review here:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Nice and Attractive"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Row>
            <Row>
              <Col as="h6" md={3}>
                Give a rating where:
              </Col>
              <Col>
                <Rating rating={rating} setRating={setRating} />
              </Col>
            </Row>
          </Col>
          <Col className="d-flex align-items-center">
            <Button variant="dark" onClick={() => handleComment()}>
              Submit
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Review;
