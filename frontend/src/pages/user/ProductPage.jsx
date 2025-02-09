import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/productSlice";
import { getAllProducts } from "../../redux/thunk/productThunk";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

function ProductPage() {
  const dispatch = useDispatch();
  const { products, pages, loading, success, error } = useSelector(
    (state) => state.product
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllProducts(page, "ASC", "Id"));
    return () => {
      dispatch(Initial());
    };
  }, [page]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <h1 className="text-center text-dark border py-2">Product List</h1>
      <Row className="p-3">
        {error ? (
          <Message variant={"danger"} message={"Error loading products"} />
        ) : loading ? (
          <Loader />
        ) : success ? (
          Object.keys(products).length ? (
            products.map((product) => (
              <Col className="p-3 d-flex" sm={3} md={2} key={product.Id}>
                <Product product={product} />
              </Col>
            ))
          ) : (
            <Message
              className="p-3"
              variant={"warning"}
              message={"No products to show"}
            />
          )
        ) : (
          <Row></Row>
        )}
      </Row>
      <Footer pages={pages} page={page} setPage={setPage} />
    </div>
  );
}

export default ProductPage;
