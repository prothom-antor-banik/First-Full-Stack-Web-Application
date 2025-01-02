import React, { useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearPendingOrder, deleteOrderItem } from "../redux/thunk/orderThunk";
import List from "./List";

function Order({ type, order }) {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(true);

  return (
    <ListGroup.Item key={order.Id}>
      <Row onClick={() => setToggle(!toggle)}>
        <Col className="text-center">{order.Id}</Col>
        <Col hidden={type === "user"} className="text-center">
          {order.userId}
        </Col>
        <Col className="text-center">{order.date}</Col>
        <Col className="text-center">{order.products}</Col>
        <Col className="text-center">{order.items}</Col>
        <Col className="text-center">{order.price}</Col>
        <Col
          hidden={type !== "staff"}
          onClick={() => {
            dispatch(clearPendingOrder(order.Id));
          }}
          className="text-center text-success"
        >
          Deliver
        </Col>
        <Col
          hidden={type !== "staff"}
          onClick={() => {
            dispatch(deleteOrderItem(order.Id));
          }}
          className="text-center text-danger"
        >
          Delete
        </Col>
        <Col hidden={type !== "admin"} className="text-center">
          {order.method}
        </Col>
        <Col
          hidden={type !== "admin"}
          className={
            order.pending
              ? "text-center text-danger"
              : "text-center text-success"
          }
        >
          {order.pending ? "True" : "False"}
        </Col>
      </Row>
      <List isShown={toggle} order={order} />
    </ListGroup.Item>
  );
}

export default Order;
