import React, { useEffect, useState } from "react";
import { Row, Col, Form, Table } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/summarySlice";
import { getAllSummaryProducts } from "../../redux/thunk/summaryThunk";
import AdminHeader from "../../components/AdminHeader";
import Rating from "../../components/Rating";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function SummaryPage() {
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { products, summary, pages, loading, success, error } = useSelector(
    (state) => state.summary
  );

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("DESC");

  useEffect(() => {
    dispatch(getAllSummaryProducts(page, sort));
    return () => dispatch(Initial());
  }, [page, sort]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_superuser) return <Navigate to="/" />;
  else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AdminHeader />
        <Row className="px-3 pt-2">
          <Col md={6}>
            <h2>
              {sort === "DESC" ? "Top Sold Products" : "Less Sold Products"}
            </h2>
          </Col>
          <Col md={1} className="d-flex justify-content-end align-items-center">
            <strong>Sort:</strong>
          </Col>
          <Col
            md={2}
            className="d-flex justify-content-start align-items-center"
          >
            <Form.Control
              as="select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="DESC">DESC</option>
              <option value="ASC">ASC</option>
            </Form.Control>
          </Col>
        </Row>
        <Row className="p-3">
          <Col md={8} lg={8}>
            {success ? (
              <Table striped responsive>
                <thead>
                  <tr>
                    <th className="text-center">Product ID</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Items</th>
                    <th className="text-center">Latest Date</th>
                    <th className="text-center">Rating</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="text-center">{product._id}</td>
                      <td className="text-center">
                        <strong>{product.product_name}</strong>
                      </td>
                      <td className="text-center">{product.product_price}</td>
                      <td className="text-center">{product.items}</td>
                      <td className="text-center">{product.date}</td>
                      <td className="text-center">
                        <Rating rating={product.rating} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : loading ? (
              <Loader />
            ) : error ? (
              <Message variant={"danger"} message={"Error loading data"} />
            ) : (
              <></>
            )}
          </Col>
          <Col md={4}>
            <Table striped bordered>
              <thead>
                <tr>
                  <th colSpan={3}>
                    <h2 className="py-2">Sales Summary</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3} className="align-middle" align="center">
                    Today
                  </td>
                  <td>Products Sold</td>
                  <td>{summary.today_products}</td>
                </tr>
                <tr>
                  <td>Items Sold</td>
                  <td>{summary.today_items}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{summary.today_price}</td>
                </tr>
                <tr>
                  <td rowSpan={3} className="align-middle" align="center">
                    This Month
                  </td>
                  <td>Products Sold</td>
                  <td>{summary.month_products}</td>
                </tr>
                <tr>
                  <td>Items Sold</td>
                  <td>{summary.month_items}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{summary.month_price}</td>
                </tr>
                <tr>
                  <td rowSpan={3} className="align-middle" align="center">
                    This Year
                  </td>
                  <td>Products Sold</td>
                  <td>{summary.year_products}</td>
                </tr>
                <tr>
                  <td>Items Sold</td>
                  <td>{summary.year_items}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{summary.year_price}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Footer pages={pages} page={page} setPage={setPage} />
      </div>
    );
  }
}

export default SummaryPage;
