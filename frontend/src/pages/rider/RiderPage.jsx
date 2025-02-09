import React, { useEffect, useState } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/deliverySlice";
import {
  getAllDeliveries,
  getRiderDeliveries,
  addRider,
  orderDelivered,
  removeRider,
} from "../../redux/thunk/deliveryThunk";
import { deleteOrderItem } from "../../redux/thunk/orderThunk";
import Header from "../../components/Header";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function RiderPage() {
  const dispatch = useDispatch();
  const { deliveries, rider_deliveries, pages, loading } = useSelector(
    (state) => state.delivery
  );
  const { current_user } = useSelector((state) => state.user);

  const [page, setPage] = useState(1);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(getAllDeliveries(page, current_user.city, current_user.street));
    dispatch(getRiderDeliveries(current_user.Id));
    return () => dispatch(Initial());
  }, [page, toggle]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_staff) return <Navigate to="/" />;
  else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Row className="p-3 justify-content-center">
          <Col md={5}>
            <h2>Orders Dashboard</h2>
            {loading ? (
              <Loader />
            ) : deliveries.length ? (
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="text-center">Id</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Products</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Street</th>
                    <th className="text-center">Apartment</th>
                    <th className="text-center">Ride</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveries.map((delivery) => {
                    return (
                      <tr key={delivery.Id}>
                        <td className="text-center">{delivery.Id}</td>
                        <td className="text-center">{delivery.user_name}</td>
                        <td className="text-center">{delivery.products}</td>
                        <td className="text-center">{delivery.price}</td>
                        <td className="text-center">{delivery.user_street}</td>
                        <td className="text-center">
                          {delivery.user_apartment}
                        </td>
                        <td className="text-center">
                          <Button
                            variant="dark"
                            onClick={() => {
                              dispatch(addRider(delivery.Id, current_user.Id));
                              setToggle(!toggle);
                            }}
                          >
                            Accept
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <Message variant={"warning"} message={"No orders to show"} />
            )}
          </Col>
          <Col md={7}>
            <h2>My Deliveries</h2>
            {loading ? (
              <Loader />
            ) : rider_deliveries.length ? (
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="text-center">Id</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Products</th>
                    <th className="text-center">Street</th>
                    <th className="text-center">Apartment</th>
                    <th className="text-center">Deliver</th>
                    <th className="text-center">Reassign</th>
                    <th className="text-center">Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  {rider_deliveries.map((delivery) => {
                    return (
                      <tr key={delivery.Id}>
                        <td className="text-center">{delivery.Id}</td>
                        <td className="text-center">{delivery.user_name}</td>
                        <td className="text-center">{delivery.products}</td>
                        <td className="text-center">{delivery.user_street}</td>
                        <td className="text-center">
                          {delivery.user_apartment}
                        </td>
                        <td className="text-center">
                          <Button
                            variant="success"
                            onClick={() => {
                              dispatch(orderDelivered(delivery.Id));
                              setToggle(!toggle);
                            }}
                          >
                            Complete
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            variant="danger"
                            onClick={() => {
                              dispatch(removeRider(delivery.Id));
                              setToggle(!toggle);
                            }}
                          >
                            Reassign
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            variant="danger"
                            onClick={() => {
                              dispatch(deleteOrderItem(delivery.Id));
                              setToggle(!toggle);
                            }}
                          >
                            Cancel
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <Message variant={"warning"} message={"No pending delivery"} />
            )}
          </Col>
        </Row>
        <Footer pages={pages} page={page} setPage={setPage} />
      </div>
    );
  }
}

export default RiderPage;
