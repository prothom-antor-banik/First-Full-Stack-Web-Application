import React, { useEffect, useState } from "react";
import { Row, Col, Table, Image, ButtonGroup, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/cartSlice";
import { addToCart } from "../../redux/thunk/cartThunk";
import { getProduct } from "../../redux/thunk/productThunk";
import { getAllComments } from "../../redux/thunk/commentThunk";
import Header from "../../components/Header";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Review from "../../components/Review";
import Rating from "../../components/Rating";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";
import base from "../../configure";

function ProductDetailsPage() {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.product);
  const { loading, success, error } = useSelector((state) => state.cart);
  const { comments, pages } = useSelector((state) => state.comment);

  const [page, setPage] = useState(1);
  const [toggle, setToggle] = useState(true);

  function handleAddToCart() {
    if (Object.keys(current_user).length) {
      dispatch(
        addToCart({
          product: {
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
          },
          userId: current_user.Id,
          productId: product.Id,
        })
      );
    }
  }

  useEffect(() => {
    dispatch(getProduct(Id));
    dispatch(getAllComments(Id, page));
    return () => dispatch(Initial());
  }, [page, toggle]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Row className="p-3">
        <Col className="p-4 align-items-center" md={4} lg={6}>
          <Image src={base + product.image} fluid rounded />
        </Col>
        <Col className="p-4" md={4} lg={6}>
          <Row>
            <Table striped bordered>
              <tbody>
                <tr>
                  <td>
                    <h4>{product.name}</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{"Price : " + product.price}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <section>{product.description}</section>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Row>
            <Table striped bordered>
              <tbody>
                <tr>
                  <td>Category</td>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{product.price}</td>
                </tr>
                <tr>
                  <td>In Stock</td>
                  <td>{product.countInStock}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td className="d-flex flex-row">
                    <Rating rating={product.rating} />
                    <p className="px-2 text-secondary">
                      ({product.rating}/{product.rate_count})
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <ButtonGroup className="d-flex">
                      <Button variant="dark" onClick={() => handleAddToCart()}>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>

          {!Object.keys(current_user).length ? (
            <Message
              variant={"warning"}
              message={"Login to Add items to cart"}
            />
          ) : error ? (
            <Message variant={"danger"} message={"Error loading product"} />
          ) : loading ? (
            <Loader />
          ) : success ? (
            <Message
              variant={"success"}
              message={"Successfully added product to cart"}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>

      {Object.keys(current_user).length ? (
        <Review productId={Id} setToggle={setToggle} toggle={!toggle} />
      ) : (
        <></>
      )}

      <Comments comments={comments} />

      <Footer pages={pages} page={page} setPage={setPage} />
    </div>
  );
}

export default ProductDetailsPage;
