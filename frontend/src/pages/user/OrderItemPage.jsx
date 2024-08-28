import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Table,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/orderSlice";
import { createOrder } from "../../redux/thunk/orderThunk";
import { deleteUserCart } from "../../redux/thunk/cartThunk";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function OrderItemPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { loading, success, error } = useSelector((state) => state.order);

  const initalState = {
    products: 0,
    items: 0,
    price: 0,
  };
  const state = Object.keys(location.state).length
    ? location.state
    : initalState;

  const [order, setOrder] = useState(state);
  const [buttonPressed, setButtonPressed] = useState(false);

  function handleOrder() {
    if (order.price) {
      dispatch(
        createOrder({
          ...order,
          price: order.price + 40,
          userId: current_user.Id,
          method: "bkash",
        })
      );
      setButtonPressed(true);
    }
  }

  useEffect(() => {
    if (buttonPressed && success) {
      setTimeout(() => {
        setOrder(initalState);
        dispatch(Initial());
        dispatch(deleteUserCart(current_user.Id));
      }, 1500);
    }
  }, [buttonPressed, success]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else {
    return (
      <div>
        <h1 className="py-2 text-center">ORDER</h1>
        <Row className="px-3">
          <Col md={8}>
            <ListGroup>
              <ListGroup.Item>
                <h2>Details:</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{"Name : " + current_user.name}</p>
                <p>{"Email : " + current_user.email}</p>
                <p>{"Address : " + current_user.address}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Payment Method:</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{"Method : Bkash"}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h2 className="py-2">Order Summary</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Product</td>
                  <td>{order.products}</td>
                </tr>
                <tr>
                  <td>Total Items</td>
                  <td>{order.items}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{order.price}</td>
                </tr>
                <tr>
                  <td>Delivery Cost</td>
                  <td>{order.items ? 40 : 0}</td>
                </tr>
                <tr>
                  <td>Total Cost</td>
                  <td>{order.price ? order.price + 40 : 0}</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <ButtonGroup className="d-flex">
                      <Button variant="dark" onClick={() => handleOrder()}>
                        Payment
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
            {error ? (
              <Message
                variant={"danger"}
                message={"Error on dealing with order"}
              />
            ) : loading ? (
              <Loader />
            ) : success ? (
              <Message
                variant={"success"}
                message={"Successfully ordered your items"}
              />
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default OrderItemPage;
