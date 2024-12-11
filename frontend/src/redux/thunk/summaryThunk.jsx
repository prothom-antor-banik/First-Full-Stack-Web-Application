import { Loading, Success, Error, ListProducts } from "../slice/summarySlice";
import axios from "axios";

export const addSummaryProduct = (product) => async (dispatch) => {
  const url = "/summary/";
  try {
    dispatch(Loading());
    const res = await axios.post(url, JSON.stringify(product), {
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.status === 201) {
      dispatch(Success());
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const getAllSummaryProducts = (page, sort) => async (dispatch) => {
  const url = `/summary/?page=${page}&sort=${sort}`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 202) {
      dispatch(ListProducts(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};
