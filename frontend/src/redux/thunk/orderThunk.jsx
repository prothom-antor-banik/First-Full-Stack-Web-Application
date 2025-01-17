import {
  Loading,
  Error,
  CurrentOrder,
  CurrentOrderState,
  ListOrders,
  Delete,
} from "../slice/orderSlice";
import axios from "axios";
import base from "../../configure";

export const createOrder = (order) => async (dispatch) => {
  const url = `${base}/orders/`;
  try {
    dispatch(Loading());
    const res = await axios.post(url, JSON.stringify(order), {
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 201) {
      dispatch(CurrentOrder(res.data.Id));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const getAllOrders =
  (page, pending, showDelivery) => async (dispatch) => {
    const url = `${base}/orders/?page=${page}&pending=${pending}&show_delivery=${showDelivery}`;
    try {
      dispatch(Loading());
      const res = await axios.get(url);
      if (res.status === 200) {
        dispatch(ListOrders(res.data));
      }
    } catch (error) {
      dispatch(Error());
    }
  };

export const getUserOrders = (id, page) => async (dispatch) => {
  const url = `${base}/orders/${id}/?page=${page}`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(ListOrders(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const getOrderById = (id) => async (dispatch) => {
  const url = `${base}/orders/pending/${id}/`;
  try {
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(CurrentOrderState(res.data.pending));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const handoverToDelivery = (id) => async (dispatch) => {
  const url = `${base}/orders/pending/${id}/`;
  try {
    dispatch(Loading());
    const res = await axios.patch(
      url,
      JSON.stringify({ show_delivery: true }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      dispatch(Delete(id));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const deleteOrderItem = (id) => async (dispatch) => {
  const url = `${base}/orders/pending/${id}`;
  try {
    dispatch(Loading());
    const res = await axios.delete(url);
    if (res.status === 200) {
      dispatch(Delete(id));
    }
  } catch (error) {
    dispatch(Error());
  }
};
