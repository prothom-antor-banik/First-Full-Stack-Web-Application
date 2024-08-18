import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/productSlice";
import { getAllProducts } from "../../redux/thunk/productThunk";
import Product from "../../components/Product";
import Message from "../../components/Message";
import Loader from "../../components/Loader";

function ProductPage() {
  const dispatch = useDispatch();
  const { products, loading, success, error } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getAllProducts());
    return () => {
      dispatch(Initial());
    };
  }, []);

  return (
    <Row className="p-4">
      <h1 className="text-center text-dark">Product List</h1>

      {error ? (
        <Message variant={"danger"} message={"Error loading products"} />
      ) : loading ? (
        <Loader />
      ) : success ? (
        products.map((product) => (
          <Col className="p-3 d-flex" sm={3} md={2} key={product.Id}>
            <Product product={product} />
          </Col>
        ))
      ) : (
        <></>
      )}
    </Row>
  );
}

export default ProductPage;
