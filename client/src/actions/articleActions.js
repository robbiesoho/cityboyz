import axios from "axios";

import {
  GET_ARTICLES,
  GET_ARTICLE,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  ARTICLES_LOADING,
} from "./types";

export const getArticles = () => (dispatch) => {
  dispatch(setArticlesLoading());
  axios.get("/api/articles").then((res) =>
    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    })
  );
};

export const getArticle = (id) => (dispatch) => {
  dispatch(setArticlesLoading());
  axios.get(`/api/articles/${id}`).then((res) =>
    dispatch({
      type: GET_ARTICLE,
      payload: res.data,
    })
  );
};

export const addArticle = (article) => (dispatch) => {
  axios.post("/api/articles", article).then((res) =>
    dispatch({
      type: ADD_ARTICLE,
      payload: res.data,
    })
  );
};
export const deleteArticle = (id) => (dispatch) => {
  axios.delete(`/api/articles/${id}`).then((res) =>
    dispatch({
      type: DELETE_ARTICLE,
      payload: id,
    })
  );
};

export const setArticlesLoading = () => {
  return {
    type: ARTICLES_LOADING,
  };
};
