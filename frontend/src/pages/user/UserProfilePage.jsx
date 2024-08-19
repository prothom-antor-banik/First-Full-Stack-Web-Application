import React, { useEffect, useState } from "react";
import { Row, Col, Form, Table, ButtonGroup, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RemoveUser } from "../../redux/slice/userSlice";
import { Initial } from "../../redux/slice/orderSlice";
import { updateUserDetails } from "../../redux/thunk/userThunk";
import { getUserOrders } from "../../redux/thunk/orderThunk";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function UserProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { orders, loading, error } = useSelector((state) => state.order);

  if (!Object.keys(current_user).length) return <Navigate replace to="/" />;

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
    dispatch(getUserOrders(current_user.Id));
    return () => dispatch(Initial());
  }, []);

  return (
    <Row className="p-3">
      <Col md={4}>
        <section className="p-2 d-flex flex-row justify-content-between">
          <h1>User Profile</h1>
          <span>
            <Button
              variant="dark"
              onClick={() => {
                dispatch(RemoveUser());
                navigate("/");
              }}
            >
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
                onChange={(e) => setState({ ...state, name: e.target.value })}
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
                onChange={(e) => setState({ ...state, email: e.target.value })}
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
          <Message variant={"danger"} message={"Error loading your orders"} />
        ) : orders.length ? (
          <Table striped responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Products</th>
                <th>Items</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.Id}>
                  <td>{order.Id}</td>
                  <td>{order.date}</td>
                  <td>{order.products}</td>
                  <td>{order.items}</td>
                  <td>{order.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <Message variant={"warning"} message={"No products to show"} />
        )}
      </Col>
      <Footer />
    </Row>
  );
}

export default UserProfilePage;
