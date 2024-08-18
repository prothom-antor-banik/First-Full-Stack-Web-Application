import { Loading, Success, ListProducts, Error } from "../slice/cartSlice";
import axios from "axios";

export const addToCart = (entry) => async (dispatch) => {
  const url = "http://127.0.0.1:8000/cart/";
  try {
    dispatch(Loading());
    const res = await axios.post(url, JSON.stringify(entry), {
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 201) dispatch(Success());
    else if (res.status === 200) dispatch(Success());
    else dispatch(Error());
  } catch (error) {
    dispatch(Error());
  }
};

export const getUserCart = (Id) => async (dispatch) => {
  const url = `http://127.0.0.1:8000/cart/${Id}`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(ListProducts(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const updataCartItem =
  (userId, productId, entry) => async (dispatch) => {
    const url = `http://127.0.0.1:8000/cart/${productId}/`;
    try {
      dispatch(Loading());
      const res = await axios.patch(url, JSON.stringify(entry), {
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.status === 200) {
        dispatch(
          ListProducts(
            res.data.filter((product) => {
              if (product.userId === userId) return true;
              else return false;
            })
          )
        );
      }
    } catch (error) {
      dispatch(Error());
    }
  };

export const deleteCartItem = (productId, userId) => async (dispatch) => {
  const url = `http://127.0.0.1:8000/cart/${productId}`;
  try {
    dispatch(Loading());
    const res = await axios.delete(url);
    if (res.status === 200) {
      dispatch(
        ListProducts(
          res.data.filter((product) => {
            if (product.userId === userId) return true;
            else return false;
          })
        )
      );
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const deleteUserCart = (userId) => async (dispatch) => {
  const url = `http://127.0.0.1:8000/cart-delete/${userId}/`;
  try {
    dispatch(Loading());
    const res = await axios.delete(url);
    if (res.status === 200) dispatch(Success());
    else dispatch(Error());
  } catch (error) {
    dispatch(Error());
  }
};
