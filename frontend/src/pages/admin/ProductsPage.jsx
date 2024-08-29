import React, { useEffect, useState } from "react";
import { Row, Col, Form, Table, ButtonGroup, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/productSlice";
import {
  getAllProducts,
  getAllProductsWithSearch,
  deleteProduct,
} from "../../redux/thunk/productThunk";
import AdminHeader from "../../components/AdminHeader";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { products, pages, loading, error } = useSelector(
    (state) => state.product
  );

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  function handleSearch() {
    setQuery("");
    dispatch(getAllProductsWithSearch(query, 1));
    dispatch(Initial());
  }

  useEffect(() => {
    dispatch(getAllProducts(page));
    return () => dispatch(Initial());
  }, [page]);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_admin) return <Navigate to="/" />;
  else {
    return (
      <div className="d-flex flex-column min-vh-100">
        <AdminHeader />
        <Row>
          <h2 className="p-2 text-center">Search Products</h2>
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
              <Col md={1}>
                <ButtonGroup className="d-flex">
                  <Button
                    type="submit"
                    variant="dark"
                    onClick={() => handleSearch()}
                  >
                    <i className="bi bi-search" />
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Form>
          <hr />
        </Row>
        <Row className="justify-content-center">
          {products.length ? (
            error ? (
              <Message variant={"danger"} message={"Error loading products"} />
            ) : loading ? (
              <Loader />
            ) : (
              <Col md={10}>
                <div className="py-3 d-flex flex-row justify-content-between">
                  <h1>Products</h1>
                  <div className="p-2">
                    <Button
                      type="submit"
                      variant="dark"
                      onClick={() => navigate("/admin/create-product")}
                    >
                      Create Product
                    </Button>
                  </div>
                </div>
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th className="text-center">ID</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Category</th>
                      <th className="text-center">Brand</th>
                      <th className="text-center">In Stock</th>
                      <th className="text-center">Update</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products.map((product) => (
                      <tr key={product.Id}>
                        <td className="text-center">{product.Id}</td>
                        <td className="text-center">
                          <strong>{product.name}</strong>
                        </td>
                        <td className="text-center">{product.price}</td>
                        <td className="text-center">{product.category}</td>
                        <td className="text-center">{product.brand}</td>
                        <td className="text-center">{product.countInStock}</td>
                        <td className="text-center">
                          <Button
                            type="submit"
                            variant="secondary"
                            onClick={() =>
                              navigate("/admin/update-product/", {
                                state: product,
                              })
                            }
                          >
                            Update
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            type="submit"
                            variant="danger"
                            onClick={() => dispatch(deleteProduct(product.Id))}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            )
          ) : (
            <Col md={10} className="py-3">
              <div className="py-3 d-flex flex-row justify-content-between">
                <h1>Products</h1>
                <div className="p-2">
                  <Button
                    type="submit"
                    variant="dark"
                    onClick={() => navigate("/admin/create-product")}
                  >
                    Create Product
                  </Button>
                </div>
              </div>
              <Message variant={"warning"} message={"No products to show"} />
            </Col>
          )}
        </Row>
        <Footer pages={pages} page={page} setPage={setPage} />
      </div>
    );
  }
}

export default ProductsPage;
