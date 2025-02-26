import React, { useEffect, useState } from "react";
import { Row, Col, Form, Table, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsers,
  getAllUsersWithSearch,
  updateUser,
  deleteUser,
} from "../../redux/thunk/userThunk";
import AdminHeader from "../../components/AdminHeader";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function UsersPage() {
  const dispatch = useDispatch();
  const { current_user, users, pages, loading, error } = useSelector(
    (state) => state.user
  );

  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  function handleSearch() {
    setQuery("");
    dispatch(getAllUsersWithSearch(query, 1));
  }

  function handleChange(user) {
    dispatch(updateUser(user));
    return setToggle(!toggle);
  }

  useEffect(() => {
    dispatch(getAllUsers(page));
  }, [toggle, page]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_superuser) return <Navigate to="/" />;
  else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AdminHeader />
        <Row>
          <h2 className="p-2 text-center">Search Users</h2>
          <Form className="p-3" onSubmit={(e) => e.preventDefault()}>
            <Row className="justify-content-center ">
              <Col md={5}>
                <Form.Control
                  type="text"
                  value={query}
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Col>
              <Col
                md={1}
                className="d-flex justify-content-start align-items-center"
              >
                <Button
                  type="submit"
                  variant="dark"
                  onClick={() => handleSearch()}
                >
                  <i className="bi bi-search" />
                </Button>
              </Col>
            </Row>
          </Form>
          <hr />
        </Row>
        <Row className="px-3">
          <Col md={12}>
            <h1 className="py-3">Users</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant={"danger"} message={"Error loading users"} />
            ) : (
              <Table striped responsive>
                <thead>
                  <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Division</th>
                    <th className="text-center">City</th>
                    <th className="text-center">Street</th>
                    <th className="text-center">Apartment</th>
                    <th className="text-center">Admin</th>
                    <th className="text-center">Make Staff</th>
                    <th className="text-center">Make Rider</th>
                    <th className="text-center">Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr key={user.Id}>
                      <td className="text-center">{user.Id}</td>
                      <td className="text-center">{user.name}</td>
                      <td className="text-center">{user.email}</td>
                      <td className="text-center">{user.division}</td>
                      <td className="text-center">{user.city}</td>
                      <td className="text-center">{user.street}</td>
                      <td className="text-center">{user.apartment}</td>
                      <td
                        className={
                          user.is_superuser
                            ? "text-center text-success"
                            : "text-center text-dark"
                        }
                      >
                        {user.is_superuser ? "Yes" : "No"}
                      </td>
                      <td className="text-center">
                        <Form className="d-flex flex-row justify-content-center">
                          <Form.Check
                            type="switch"
                            defaultChecked={user.is_admin}
                            onChange={() =>
                              handleChange({
                                Id: user.Id,
                                is_admin: true,
                              })
                            }
                          />
                        </Form>
                      </td>
                      <td className="text-center">
                        <Form className="d-flex flex-row justify-content-center">
                          <Form.Check
                            type="switch"
                            defaultChecked={user.is_staff}
                            onChange={() =>
                              handleChange({
                                Id: user.Id,
                                is_staff: true,
                              })
                            }
                          />
                        </Form>
                      </td>
                      <td className="text-center">
                        <Button
                          type="submit"
                          variant="danger"
                          onClick={() => dispatch(deleteUser(user.Id))}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
        <Footer pages={pages} page={page} setPage={setPage} />
      </div>
    );
  }
}

export default UsersPage;
