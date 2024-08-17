import { Loading, Success, Error } from "../slice/orderSlice";
import axios from "axios";

export const createOrder = (order) => async (dispatch) => {
  const url = "http://127.0.0.1:8000/orders/";
  try {
    dispatch(Loading());
    const res = await axios.post(url, JSON.stringify(order), {
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 201) {
      dispatch(Success(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const getAllOrders = () => async (dispatch) => {
  const url = "http://127.0.0.1:8000/orders/";
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(Success(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const getUserOrders = (id) => async (dispatch) => {
  const url = `http://127.0.0.1:8000/orders/${id}`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(Success(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};
