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
import { Initial } from "../../redux/slice/orderSlice";
import { updateUserDetails } from "../../redux/thunk/userThunk";
import { getUserOrders } from "../../redux/thunk/orderThunk";
import Header from "../../components/Header";
import Order from "../../components/Order";
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
    division: current_user.division,
    city: current_user.city,
    street: current_user.street,
    apartment: current_user.apartment,
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
              <Form.Group as={Row} className="mb-3">
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

              <Form.Group as={Row} className="mb-3">
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
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label column sm="3" className="fw-bold">
                      Division
                    </Form.Label>
                    <Form.Control
                      plaintext
                      type="text"
                      value={state.division}
                      onChange={(e) =>
                        setState({ ...state, division: e.target.value })
                      }
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label column sm="3" className="fw-bold">
                      City
                    </Form.Label>
                    <Form.Control
                      plaintext
                      type="text"
                      value={state.city}
                      onChange={(e) =>
                        setState({ ...state, city: e.target.value })
                      }
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label column sm="3" className="fw-bold">
                      Street
                    </Form.Label>
                    <Form.Control
                      plaintext
                      type="text"
                      value={state.street}
                      onChange={(e) =>
                        setState({ ...state, street: e.target.value })
                      }
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label column sm="3" className="fw-bold">
                      Apartment
                    </Form.Label>
                    <Form.Control
                      plaintext
                      type="text"
                      value={state.apartment}
                      onChange={(e) =>
                        setState({ ...state, apartment: e.target.value })
                      }
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
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

              <Form.Group className="mb-3">
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
                <ListGroup.Item>
                  <Row>
                    <Col as="h5" className="text-center">
                      ID
                    </Col>
                    <Col as="h5" className="text-center">
                      Date
                    </Col>
                    <Col as="h5" className="text-center">
                      Products
                    </Col>
                    <Col as="h5" className="text-center">
                      Items
                    </Col>
                    <Col as="h5" className="text-center">
                      Total
                    </Col>
                    <Col as="h5" className="text-center">
                      Pending
                    </Col>
                  </Row>
                </ListGroup.Item>

                {orders.map((order) => (
                  <Order key={order.Id} type="user" order={order} />
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
