import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Form,
  ListGroup,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RemoveUser } from "../../redux/slice/userSlice";
import { Initial, ToggleIsShown } from "../../redux/slice/orderSlice";
import { updateUserDetails } from "../../redux/thunk/userThunk";
import { getUserOrders } from "../../redux/thunk/orderThunk";
import Header from "../../components/Header";
import List from "../../components/List";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function UserProfilePage() {
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { orders, pages, loading, error } = useSelector((state) => state.order);

  const [page, setPage] = useState(1);

  const [state, setState] = useState({
    name: current_user.name,
    email: current_user.email,
    address: current_user.address,
  });

  const [Password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  function handleClick() {
    if (Password.password === Password.confirmPassword) {
      if (Password.password) {
        dispatch(
          updateUserDetails({
            ...state,
            password: Password.password,
            Id: current_user.Id,
          })
        );
      } else {
        dispatch(
          updateUserDetails({
            ...state,
            Id: current_user.Id,
          })
        );
      }
    }
  }

  useEffect(() => {
    dispatch(getUserOrders(current_user.Id, page));
    return () => dispatch(Initial());
  }, [page]);

  if (!Object.keys(current_user).length) return <Navigate to="/" />;
  else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Row className="p-4">
          <Col md={4}>
            <section className="p-2 d-flex flex-row justify-content-between">
              <h1>User Profile</h1>
              <span>
                <Button variant="dark" onClick={() => dispatch(RemoveUser())}>
                  Logout
                </Button>
              </span>
            </section>
            <Form
              className="p-3 bg-light text-secondary"
              onSubmit={(e) => e.preventDefault()}
            >
              <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm="3" className="fw-bold">
                  Name
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    plaintext
                    type="text"
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label column sm="3" className="fw-bold">
                  Email
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    plaintext
                    readOnly
                    type="email"
                    value={state.email}
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="address">
                <Form.Label column sm="3" className="fw-bold">
                  Address
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    plaintext
                    as="textarea"
                    rows={2}
                    value={state.address}
                    onChange={(e) =>
                      setState({ ...state, address: e.target.value })
                    }
                  ></Form.Control>
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  value={Password.password}
                  onChange={(e) =>
                    setPassword({ ...Password, password: e.target.value })
                  }
                ></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label className="fw-bold">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={Password.confirmPassword}
                  onChange={(e) =>
                    setPassword({
                      ...Password,
                      confirmPassword: e.target.value,
                    })
                  }
                ></Form.Control>
              </Form.Group>

              <ButtonGroup className="d-flex">
                <Button type="submit" variant="dark" onClick={handleClick}>
                  Update
                </Button>
              </ButtonGroup>
            </Form>
            {error ? (
              <Message variant={"danger"} message={"Couldn't update profile"} />
            ) : loading ? (
              <Loader />
            ) : (
              <></>
            )}
          </Col>
          <Col md={8}>
            <h1 className="p-2">My Orders</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message
                variant={"danger"}
                message={"Error loading your orders"}
              />
            ) : orders.length ? (
              <ListGroup>
                <Row>
                  <Col className="text-center">ID</Col>
                  <Col className="text-center">Date</Col>
                  <Col className="text-center">Products</Col>
                  <Col className="text-center">Items</Col>
                  <Col className="text-center">Total</Col>
                </Row>

                {orders.map((order) => (
                  <ListGroup.Item key={order.Id}>
                    <Row onClick={() => dispatch(ToggleIsShown(order.Id))}>
                      <Col className="text-center">{order.Id}</Col>
                      <Col className="text-center">{order.date}</Col>
                      <Col className="text-center">{order.products}</Col>
                      <Col className="text-center">{order.items}</Col>
                      <Col className="text-center">{order.price}</Col>
                    </Row>
                    <List order={order} />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <Message variant={"warning"} message={"No products to show"} />
            )}
          </Col>
        </Row>
        <Footer pages={pages} page={page} setPage={setPage} />
      </div>
    );
  }
}

export default UserProfilePage;
