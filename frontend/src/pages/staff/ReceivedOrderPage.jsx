import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/orderSlice";
import { getAllOrders } from "../../redux/thunk/orderThunk";
import AdminHeader from "../../components/AdminHeader";
import Order from "../../components/Order";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function ReceivedOrderPage() {
  const dispatch = useDispatch();
  const { orders, pages, loading, error } = useSelector((state) => state.order);
  const { current_user } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllOrders(page, true));
    return () => dispatch(Initial());
  }, [page]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_admin) return <Navigate to="/" />;
  else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AdminHeader />
        <Row className="justify-content-center">
          {orders.length ? (
            error ? (
              <Message variant={"danger"} message={"Error loading orders"} />
            ) : loading ? (
              <Loader />
            ) : (
              <Col md={11}>
                <h1 className="py-3"> Pending Orders</h1>
                <ListGroup>
                  <Row>
                    <Col className="text-center">ID</Col>
                    <Col className="text-center">User</Col>
                    <Col className="text-center">Date</Col>
                    <Col className="text-center">Products</Col>
                    <Col className="text-center">Items</Col>
                    <Col className="text-center">Price</Col>
                    <Col className="text-center">Complete</Col>
                    <Col className="text-center">Terminate</Col>
                  </Row>

                  {orders.map((order) => (
                    <Order key={order.Id} type="staff" order={order} />
                  ))}
                </ListGroup>
              </Col>
            )
          ) : (
            <Col md={11} className="py-3">
              <Message variant={"warning"} message={"No order is made yet"} />
            </Col>
          )}
        </Row>
        <Footer pages={pages} page={page} setPage={setPage} />
      </div>
    );
  }
}

export default ReceivedOrderPage;
