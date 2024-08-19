import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllUsers,
  updateToAdmin,
  deleteUser,
} from "../../redux/thunk/userThunk";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

function UsersPage() {
  const dispatch = useDispatch();
  const { current_user, users, loading, error } = useSelector(
    (state) => state.user
  );

  const [toggle, setToggle] = useState(false);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  if (!current_user.is_admin) return <Navigate to="/" />;

  function handleChange(user) {
    dispatch(
      updateToAdmin({
        Id: user.Id,
        is_admin: true,
      })
    );
    return setToggle(!toggle);
  }

  useEffect(() => {
    dispatch(getAllUsers());
  }, [toggle]);

  return (
    <Row className="justify-content-center">
      <Col md={10}>
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
                <th className="text-center">Address</th>
                <th className="text-center">Admin</th>
                <th className="text-center">Make Admin</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.Id}>
                  <td className="text-center">{user.Id}</td>
                  <td className="text-center">{user.name}</td>
                  <td className="text-center">{user.email}</td>
                  <td className="text-center">{user.address}</td>
                  <td className="text-center">
                    {user.is_admin ? "Yes" : "No"}
                  </td>
                  <td>
                    <Form className="d-flex flex-row justify-content-center">
                      <Form.Check
                        type="switch"
                        defaultChecked={user.is_admin}
                        onChange={() => handleChange(user)}
                      />
                    </Form>
                  </td>
                  <td>
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
  );
}

export default UsersPage;
