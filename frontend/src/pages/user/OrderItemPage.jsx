import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Table,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/orderSlice";
import { reduceProduct } from "../../redux/thunk/productThunk";
import { createOrder, getOrderById } from "../../redux/thunk/orderThunk";
import { deleteUserCart } from "../../redux/thunk/cartThunk";
import { addSummaryProduct } from "../../redux/thunk/summaryThunk";
import Header from "../../components/Header";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function OrderItemPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { current_user } = useSelector((state) => state.user);
  const { loading, success, error, order_id, pending } = useSelector(
    (state) => state.order
  );
  const { stored_list } = useSelector((state) => state.cart);

  const initalState = {
    products: 0,
    items: 0,
    price: 0,
    encode: "",
  };
  const order = Object.keys(location.state).length
    ? location.state
    : initalState;

  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  function handleOrder() {
    if (!buttonDisable) {
      dispatch(
        createOrder({
          ...order,
          price: order.price + 40,
          userId: current_user.Id,
          method: "bkash",
          pending: true,
        })
      );
      setButtonPressed(true);
    }
  }

  function handleOderSuccess() {
    if (!pending) {
      setOrderSuccess(true);
      setTimeout(
        () =>
          navigate("/lastpage", {
            state: {
              name: current_user.name,
              email: current_user.email,
              address: current_user.address,
              method: "bkash",
              encode: order.encode,
              order_number: order_id,
              sub_total: order.price,
            },
          }),
        2000
      );
    }
  }

  useEffect(() => {
    if (buttonPressed && success) {
      setButtonDisable(true);
      setTimeout(() => {
        dispatch(Initial());
        dispatch(deleteUserCart(current_user.Id));
      }, 1500);
    }
    return () => dispatch(Initial());
  }, [buttonPressed, success]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (buttonDisable && pending) {
        dispatch(getOrderById(order_id));
      }
    }, 1000);
    if (!pending) clearInterval(myInterval);
    return () => clearInterval(myInterval);
  }, [pending, buttonDisable]);

  useEffect(() => {
    if (orderSuccess) {
      stored_list.map((element) => {
        dispatch(
          reduceProduct(
            element.productId,
            element.product.countInStock - element.items
          )
        );
        dispatch(
          addSummaryProduct({
            _id: element.productId,
            product_name: element.product.name,
            product_price: element.product.price,
            items: element.items,
            date: new Date().toISOString().split("T")[0],
          })
        );
      });
    }
  }, [orderSuccess]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />
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
              <ListGroup.Item>
                <h2>{"Ordered Items"}</h2>
              </ListGroup.Item>
              {order.encode.split("-").map((str) => (
                <ListGroup.Item>
                  <Row key={str.split(":")[0]}>
                    <Col md={3}>{`Product: ${str.split(":")[1]}`}</Col>
                    <Col md={2}>{`Price : ${str.split(":")[2]}`}</Col>
                    <Col md={2}>{`Quantity : ${str.split(":")[3]}`}</Col>
                  </Row>
                </ListGroup.Item>
              ))}
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
                      {buttonDisable ? (
                        <Button
                          disabled={orderSuccess}
                          variant={pending ? "warning" : "success"}
                          onClick={() => handleOderSuccess()}
                        >
                          {pending ? "Processing" : "Payment"}
                        </Button>
                      ) : (
                        <Button variant="dark" onClick={() => handleOrder()}>
                          Order
                        </Button>
                      )}
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
            {!orderSuccess ? (
              error ? (
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
              )
            ) : (
              <Message variant={"success"} message={"Payment Complete!!!"} />
            )}
          </Col>
        </Row>
        <Footer />
      </div>
    );
  }
}

export default OrderItemPage;
