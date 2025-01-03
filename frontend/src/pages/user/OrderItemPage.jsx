import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Table,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/orderSlice";
import { partialUpdateProduct } from "../../redux/thunk/productThunk";
import { createOrder, getOrderById } from "../../redux/thunk/orderThunk";
import { deleteUserCart } from "../../redux/thunk/cartThunk";
import { addSummaryProduct } from "../../redux/thunk/summaryThunk";
import Header from "../../components/Header";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function OrderItemPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { current_user } = useSelector((state) => state.user);
  const { loading, success, error, order_id, pending } = useSelector(
    (state) => state.order
  );
  const { stored_list, products, items, price } = useSelector(
    (state) => state.cart
  );

  const [buttonPressed, setButtonPressed] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  function handleOrder() {
    if (!buttonDisable) {
      let product_list = [];
      stored_list.map((element) =>
        product_list.push([element.productId, element.items])
      );
      dispatch(
        createOrder({
          products: products,
          items: items,
          price: price + 40,
          userId: current_user.Id,
          method: "bkash",
          pending: true,
          product_list: product_list,
        })
      );
      setButtonPressed(true);
    }
  }

  function handleOderSuccess() {
    if (!pending) {
      setOrderSuccess(true);
      setTimeout(() => navigate("/lastpage"), 2000);
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
          partialUpdateProduct(element.productId, {
            countInStock: element.product.countInStock - element.items,
          })
        );
        dispatch(
          addSummaryProduct({
            _id: element.productId,
            product_name: element.product.name,
            product_price: element.product.price,
            items: element.items,
            rating: element.product.rating,
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
                <p>
                  {"Address : " +
                    `${current_user.city} | ${current_user.street} | ${current_user.zip_code}`}
                </p>
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

              {stored_list.map((element) => (
                <ListGroup.Item key={element.Id}>
                  <Row>
                    <Col md={4}>{`Product: ${element.product.name}`}</Col>
                    <Col md={4}>{`Price : ${element.product.price}`}</Col>
                    <Col md={4}>{`Quantity : ${element.items}`}</Col>
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
                  <td>{products}</td>
                </tr>
                <tr>
                  <td>Total Items</td>
                  <td>{items}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td>Delivery Cost</td>
                  <td>{items ? 40 : 0}</td>
                </tr>
                <tr>
                  <td>Total Cost</td>
                  <td>{price ? price + 40 : 0}</td>
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
