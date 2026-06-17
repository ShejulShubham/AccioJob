import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
} from "./postAction";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_POST_SUCCESS: {
      return { loading: false, posts: action.payload, error: "" };
    }
    case FETCH_POST_ERROR: {
      return { loading: false, posts: [], error: action.payload };
    }
    default:
      return state;
  }
}
