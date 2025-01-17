import {
  Loading,
  Success,
  Error,
  ListComments,
  Delete,
} from "../slice/commentSlice";
import axios from "axios";
import base from "../../configure";

export const createComment = (comment, productId) => async (dispatch) => {
  const url = `${base}/comment/${productId}/`;
  try {
    dispatch(Loading());
    const res = await axios.post(url, comment, {
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

export const getAllComments = (productId, page) => async (dispatch) => {
  const url = `${base}/comment/${productId}/?page=${page}`;
  try {
    dispatch(Loading());
    const res = await axios.get(url);
    if (res.status === 202) {
      dispatch(ListComments(res.data));
    }
  } catch (error) {
    dispatch(Error());
  }
};

export const deleteProduct = (Id) => async (dispatch) => {
  const url = `${base}/comment/${Id}`;
  try {
    dispatch(Loading());
    const res = await axios.delete(url);
    if (res.status === 200) {
      dispatch(Delete(Id));
    }
  } catch (error) {
    dispatch(Error());
  }
};
