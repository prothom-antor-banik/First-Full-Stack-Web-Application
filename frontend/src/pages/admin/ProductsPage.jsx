import React, { useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/productSlice";
import { getAllProducts, deleteProduct } from "../../redux/thunk/productThunk";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
    return () => dispatch(Initial());
  }, []);

  if (!Object.keys(current_user).length) return <Navigate to="/login" />;
  else if (!current_user.is_admin) return <Navigate to="/" />;
  else {
    return (
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
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>In Stock</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr key={product.Id}>
                      <td>{product.Id}</td>
                      <td>
                        <strong>{product.name}</strong>
                      </td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.brand}</td>
                      <td>{product.countInStock}</td>
                      <td>
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
                      <td>
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
    );
  }
}

export default ProductsPage;
