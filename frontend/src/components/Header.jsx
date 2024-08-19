import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../redux/slice/productSlice";
import {
  getAllProducts,
  getAllProductsWithSearch,
} from "../redux/thunk/productThunk";

function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);

  const [query, setQuery] = useState("");

  function handleSearch() {
    setQuery("");
    dispatch(getAllProductsWithSearch(query));
    dispatch(Initial());
  }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/"
              className={"text-decoration-none"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "gray",
                };
              }}
              onClick={() => dispatch(getAllProducts())}
            >
              Shop
            </NavLink>
          </Navbar.Brand>

          <Nav className="ml-auto">
            <Form
              className={
                location.pathname === "/" ? "px-3 visible" : "px-3 invisible"
              }
              onSubmit={(e) => e.preventDefault()}
            >
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    value={query}
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    type="submit"
                    variant="light"
                    onClick={() => handleSearch()}
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
            {current_user.is_admin ? (
              <NavLink
                className={"text-decoration-none align-self-center"}
                to="/admin"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "gray",
                  };
                }}
              >
                Admin
              </NavLink>
            ) : (
              <></>
            )}
            <NavLink
              to="/cart"
              className={"px-3 text-decoration-none align-self-center"}
              style={({ isActive }) => {
                return {
                  color: isActive ? "white" : "gray",
                };
              }}
            >
              Cart
            </NavLink>
            {Object.keys(current_user).length ? (
              <NavLink
                to="/profile"
                className={"text-decoration-none align-self-center"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "gray",
                  };
                }}
              >
                User
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={"text-decoration-none align-self-center"}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "gray",
                  };
                }}
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
