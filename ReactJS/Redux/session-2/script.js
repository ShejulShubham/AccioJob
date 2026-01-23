const redux = require("redux");
const redux_logger = require("redux-logger");

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = redux_logger.createLogger();

// Action Definition
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const BUY_PIZZA = "BUY_PIZZA";
const BUY_COMBO1 = "BUY_COMBO1";

// Action is an object that has type property and its value is a string constant
// {
//     type: BUY_CAKE,
//     info: 'this action is to buy cake'
// }

// action creator -> these are functions that returns action
function buyCake(quantity=1) {
  return {
    type: BUY_CAKE,
    payload: quantity
  };
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  };
}

function buyTwoPizzas() {
  return {
    type: BUY_PIZZA,
  };
}

function buyCombo1() {
  return {
    type: BUY_COMBO1,
  };
}


// defining initial state for reducers
const icecreamInitialState = {
  numOfIcecreams: 30,
  numOfPizzas: 50,
};

const cakeInitialState = {
  numOfCakes: 10,
}

function icecreamReducer(state = icecreamInitialState, action) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    case BUY_PIZZA:
      return {
        ...state,
        numOfPizzas: state.numOfPizzas - 2,
      };

    case BUY_COMBO1:
      return {
        ...state,
        numOfPizzas: state.numOfPizzas - 1,
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
}

function cakeReducer(state = cakeInitialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducer({
  cake: cakeReducer,
  icecream: icecreamReducer
})
// createStore is a method that takes reducer as arg to create store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state: ", store.getState());

// subscribe method takes listener(callback) as arg and it will be executed every time the state changes
// store.subscribe(() => {
//   console.log(store.getState());
// });

// dispatching action
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

store.dispatch(buyTwoPizzas());
store.dispatch(buyTwoPizzas());

store.dispatch(buyCombo1());

store.dispatch(buyCake(2));