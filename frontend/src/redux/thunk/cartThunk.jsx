import {
  Loading,
  Success,
  ListProducts,
  Update,
  Delete,
  Error,
} from "../slice/cartSlice";
import axios from "axios";
import base from "../../configure";

export const addToCart = (cartItem) => async (dispatch) => {
  const url = `${base}/cart/`;
  try {
    dispatch(Loading());
    const res = await axios.post(url, JSON.stringify(cartItem), {
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

export const getUserCart = (Id, page) => async (dispatch) => {
  const url = `${base}/cart/${Id}/?page=${page}`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(ListProducts(res.data));
    } else {
      dispatch(Error());
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const updataCartItem = (Id, cartItem) => async (dispatch) => {
  const url = `${base}/cart/${Id}/`;
  try {
    dispatch(Loading());
    const res = await axios.patch(url, JSON.stringify(cartItem), {
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 200) {
      dispatch(Update({ Id, cartItem }));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const deleteCartItem = (productId) => async (dispatch) => {
  const url = `${base}/cart/${productId}`;
  try {
    dispatch(Loading());
    const res = await axios.delete(url);
    if (res.status === 200) {
      dispatch(Delete(productId));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const deleteUserCart = (userId) => async (dispatch) => {
  const url = `${base}/cart-delete/${userId}/`;
  try {
    dispatch(Loading());
    const res = await axios.delete(url);
    if (res.status === 200) dispatch(Success());
    else dispatch(Error());
  } catch (error) {
    dispatch(Error());
  }
};
