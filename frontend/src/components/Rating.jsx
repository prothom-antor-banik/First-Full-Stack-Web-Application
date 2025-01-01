import React from "react";
import { Row, Col } from "react-bootstrap";

function Rating({ rating = 0, setRating = null }) {
  return (
    <Row>
      <Col>
        <i
          onClick={() => setRating(1)}
          className={rating >= 1 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star"}
        />

        <i
          onClick={() => setRating(2)}
          className={rating >= 2 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star"}
        />

        <i
          onClick={() => setRating(3)}
          className={rating >= 3 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star"}
        />

        <i
          onClick={() => setRating(4)}
          className={rating >= 4 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star"}
        />

        <i
          onClick={() => setRating(5)}
          className={rating >= 5 ? "px-1 bi bi-star-fill" : "px-1 bi bi-star"}
        />
      </Col>
    </Row>
  );
}

export default Rating;
