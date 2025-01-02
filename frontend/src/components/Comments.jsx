import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import Rating from "./Rating";
import Message from "./Message";

function Comments({ comments }) {
  return (
    <Row className="px-3">
      <hr />
      <h2 className="pb-2 px-3">All reviews</h2>
      {comments.length ? (
        <></>
      ) : (
        <Message variant={"warning"} message={"No reviews yet!"} />
      )}
      {comments.map((comment) => (
        <ListGroup className="px-2 pb-2" key={comment._id}>
          <ListGroup.Item>
            <Row className="px-2">
              <Col md={2}>
                <Row>{comment.userName}</Row>
                <Row>{comment.date}</Row>
              </Col>
              <Col md={8}>
                <Row>
                  <Rating rating={comment.rating} />
                </Row>
                <Row>{comment.message}</Row>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      ))}
      <hr className="p-2" />
    </Row>
  );
}

export default Comments;
