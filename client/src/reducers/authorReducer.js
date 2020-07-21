import { GET_AUTHOR, AUTHORS_LOADING } from "../actions/types";

const intialState = {
  author: [],
  loading: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_AUTHOR:
      return {
        ...state,
        author: action.payload,
        loading: false,
      };

    case AUTHORS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
