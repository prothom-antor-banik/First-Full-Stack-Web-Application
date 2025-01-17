import {
  Loading,
  Success,
  Error,
  ListDeliveries,
  RiderDeliveries,
  Delete,
} from "../slice/deliverySlice";
import axios from "axios";
import base from "../../configure";

export const getAllDeliveries = (page, city, street) => async (dispatch) => {
  const url = `${base}/delivery/?page=${page}&city=${city}&street=${street}`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(ListDeliveries(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const getRiderDeliveries = (id) => async (dispatch) => {
  const url = `${base}/delivery/${id}/`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 200) {
      dispatch(RiderDeliveries(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const addRider = (id, riderId) => async (dispatch) => {
  const url = `${base}/delivery/${id}/`;
  try {
    dispatch(Loading());
    const res = await axios.patch(url, JSON.stringify({ rider: riderId }), {
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 200) {
      dispatch(Success());
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const orderDelivered = (id) => async (dispatch) => {
  const url = `${base}/delivery/${id}/`;
  try {
    dispatch(Loading());
    const res = await axios.patch(
      url,
      JSON.stringify({ pending: false, show_delivery: false }),
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

export const removeRider = (id) => async (dispatch) => {
  const url = `${base}/delivery/${id}/`;
  try {
    dispatch(Loading());
    const res = await axios.patch(url, JSON.stringify({ rider: null }), {
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 200) {
      dispatch(Success());
    }
  } catch (error) {
    dispatch(Error());
  }
};
