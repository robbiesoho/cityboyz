import {
  GET_ARTICLES,
  GET_ARTICLE,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  ARTICLES_LOADING,
} from "../actions/types";

const intialState = {
  articles: [],
  loading: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false,
      };
    case GET_ARTICLE:
      return {
        // article: {
        //   // [action.payload.name]: action.payload,
        //   // data: action.payload,
        //   articles: action.payload,
        // },
        ...state,
        article: action.payload,
        loading: false,
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          (article) => article._id !== action.payload
        ),
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload, ...state.articles],
      };
    case ARTICLES_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
