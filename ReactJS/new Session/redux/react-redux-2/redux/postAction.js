export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

const FETCH_API = "https://jsonplaceholder.typicode.com/posts";

function fetchPostRequest() {
  return { type: FETCH_POST_REQUEST };
}
function fetchPostSuccess(posts) {
  return { type: FETCH_POST_SUCCESS, payload: posts };
}
function fetchPostError(error) {
  return { type: FETCH_POST_ERROR, payload: error };
}

export function fetchPosts() {
  return async function (dispatch) {
    dispatch(fetchPostRequest());

    try {
      const response = await fetch(FETCH_API);
      const data = await response.json();
      dispatch(fetchPostSuccess(data));
    } catch (error) {
      dispatch(fetchPostError(error));
    }
  };
}
