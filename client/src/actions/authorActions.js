import axios from "axios";

import { GET_AUTHOR, AUTHORS_LOADING } from "./types";

export const getAuthor = (id) => (dispatch) => {
  dispatch(setAuthorsLoading());
  axios.get(`/api/authors/${id}`).then((res) =>
    dispatch({
      type: GET_AUTHOR,
      payload: res.data,
    })
  );
};

export const setAuthorsLoading = () => {
  return {
    type: AUTHORS_LOADING,
  };
};
