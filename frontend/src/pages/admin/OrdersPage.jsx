import React, { useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/orderSlice";
import { getAllOrders } from "../../redux/thunk/orderThunk";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function OrdersPage() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const { current_user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllOrders());
    return () => dispatch(Initial());
  }, []);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_admin) return <Navigate to="/" />;
  else {
    return (
      <Row className="justify-content-center">
        {orders.length ? (
          error ? (
            <Message variant={"danger"} message={"Error loading orders"} />
          ) : loading ? (
            <Loader />
          ) : (
            <Col md={10}>
              <h1 className="py-3">Orders</h1>
              <Table striped responsive>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User</th>
                    <th>Products</th>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Method</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order.Id}>
                      <td>{order.Id}</td>
                      <td>{order.userId}</td>
                      <td>{order.products}</td>
                      <td>{order.items}</td>
                      <td>{order.price}</td>
                      <td>{order.method}</td>
                      <td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          )
        ) : (
          <Col md={10} className="py-3">
            <Message variant={"warning"} message={"No order is made yet"} />
          </Col>
        )}
        <Footer />
      </Row>
    );
  }
}

export default OrdersPage;
