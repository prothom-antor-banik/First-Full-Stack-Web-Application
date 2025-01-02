import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial, ToggleIsShown } from "../../redux/slice/orderSlice";
import { getAllOrders } from "../../redux/thunk/orderThunk";
import AdminHeader from "../../components/AdminHeader";
import List from "../../components/List";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function OrdersPage() {
  const dispatch = useDispatch();
  const { orders, pages, loading, error } = useSelector((state) => state.order);
  const { current_user } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllOrders(page, false));
    return () => dispatch(Initial());
  }, [page]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_superuser) return <Navigate to="/" />;
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
                <h1 className="py-3">Orders</h1>
                <ListGroup>
                  <ListGroup.Item>
                    <Row>
                      <Col as="h5" className="text-center">
                        ID
                      </Col>
                      <Col as="h5" className="text-center">
                        User
                      </Col>
                      <Col as="h5" className="text-center">
                        Products
                      </Col>
                      <Col as="h5" className="text-center">
                        Items
                      </Col>
                      <Col as="h5" className="text-center">
                        Price
                      </Col>
                      <Col as="h5" className="text-center">
                        Method
                      </Col>
                      <Col as="h5" className="text-center">
                        Pending
                      </Col>
                      <Col as="h5" className="text-center">
                        Date
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {orders.map((order) => (
                    <ListGroup.Item key={order.Id}>
                      <Row onClick={() => dispatch(ToggleIsShown(order.Id))}>
                        <Col className="text-center">{order.Id}</Col>
                        <Col className="text-center">{order.userId}</Col>
                        <Col className="text-center">{order.products}</Col>
                        <Col className="text-center">{order.items}</Col>
                        <Col className="text-center">{order.price}</Col>
                        <Col className="text-center">{order.method}</Col>
                        <Col
                          className={
                            order.pending
                              ? "text-center text-danger"
                              : "text-center text-success"
                          }
                        >
                          {order.pending ? "True" : "False"}
                        </Col>

                        <Col className="text-center">{order.date}</Col>
                      </Row>
                      <List order={order} />
                    </ListGroup.Item>
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

export default OrdersPage;
