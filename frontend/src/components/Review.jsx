import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import { createComment } from "../redux/thunk/commentThunk";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Review({ productId, setToggle = null, toggle = null }) {
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);

  const [comment, setComment] = useState("");

  function handleComment() {
    dispatch(
      createComment(
        {
          _id: uuidv4().toString(),
          userId: current_user.Id,
          userName: current_user.name,
          productId: productId,
          message: comment,
          date: new Date().toISOString().split("T")[0],
        },
        productId
      )
    );
    setComment("");
    if (setToggle) setToggle(toggle);
  }

  return (
    <Row className="p-2 justify-content-center">
      <Col md={10}>
        <Form>
          <Form.Group className="p-2">
            <Form.Label className="fw-bold">Write a review here!</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Nice and Attractive"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col className="d-flex align-items-center">
        <Button variant="dark" onClick={() => handleComment()}>
          Submit
        </Button>
      </Col>
    </Row>
  );
}

export default Review;
