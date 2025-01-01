import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Table,
  Image,
  ListGroup,
  ButtonGroup,
  Button,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Initial } from "../../redux/slice/cartSlice";
import { getProduct } from "../../redux/thunk/productThunk";
import { addToCart } from "../../redux/thunk/cartThunk";
import { createComment, getAllComments } from "../../redux/thunk/commentThunk";
import Header from "../../components/Header";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import { v4 as uuidv4 } from "uuid";
import base from "../../configure";

function ProductDetailsPage() {
  const { Id } = useParams();
  const dispatch = useDispatch();
  const { current_user } = useSelector((state) => state.user);
  const { product } = useSelector((state) => state.product);
  const { loading, success, error } = useSelector((state) => state.cart);
  const { comments, pages } = useSelector((state) => state.comment);

  const [comment, setComment] = useState("");
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

  function handleComment() {
    dispatch(
      createComment(
        {
          _id: uuidv4().toString(),
          userId: current_user.Id,
          userName: current_user.name,
          productId: Id,
          message: comment,
          date: new Date().toISOString().split("T")[0],
        },
        Id
      )
    );
    setComment("");
    setToggle(!toggle);
  }

  useEffect(() => {
    dispatch(getProduct(Id));
    return () => dispatch(Initial());
  }, []);

  useEffect(() => {
    dispatch(getAllComments(Id, page));
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
                  <td>{product.rating}</td>
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
        <Row className="p-2 justify-content-center">
          <Col md={10}>
            <Form>
              <Form.Group className="p-2">
                <Form.Label className="fw-bold">
                  Write a review here!
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Nice and Attractive"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col className="d-flex align-items-center">
            <Button variant="dark" onClick={() => handleComment()}>
              Submit
            </Button>
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <Row className="px-3">
        <hr />
        <h2 className="pb-2 px-3">All reviews</h2>
        {comments.map((comment) => (
          <ListGroup className="px-2 pb-2" key={comment._id}>
            <ListGroup.Item>
              <Row className="px-2">
                <Col md={2}>
                  <Row>{comment.userName}</Row>
                  <Row>{comment.date}</Row>
                </Col>
                <Col md={8}>{comment.message}</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        ))}
        <hr className="p-2" />
      </Row>
      <Footer pages={pages} page={page} setPage={setPage} />
    </div>
  );
}

export default ProductDetailsPage;
