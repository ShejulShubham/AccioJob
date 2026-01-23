const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").thunk;
const redux_logger = require("redux-logger");

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = redux_logger.createLogger();
const API = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchUserError(error) {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
}

function fetchUsers() {
  return async function (dispatch) {
    dispatch(fetchUserRequest());

    try {
      const result = await axios.get(API);
      const userIDs = result.data.map((user) => user.id);
      dispatch(fetchUserSuccess(userIDs));
    } catch (error) {
      dispatch(fetchUserError(error.message));
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_USER_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

// store.subscribe(()=>{
//     console.log(store.getState());
// })

store.dispatch(fetchUsers());