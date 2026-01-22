const redux = require("redux");

const createStore = redux.createStore;
// Action Definition
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const BUY_PIZZA = "BUY_PIZZA";
const BUY_COMBO1 = "BUY_COMBO1";
const LAST_ACTION = "LAST_ACTION";

// Action is an object that has type property and its value is a string constant
// {
//     type: BUY_CAKE,
//     info: 'this action is to buy cake'
// }

// action creator -> these are functions that returns action
function buyCake() {
  return {
    type: BUY_CAKE,
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

function lastActionPerformed() {
  return {
    type: LAST_ACTION,
  };
}

// defining initial state for reducers
const initialState = {
  numOfCakes: 10,
  numOfIcecreams: 30,
  numOfPizzas: 50,
  lastAction: "NO Action Performed!",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
        lastAction: BUY_CAKE,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
        lastAction: BUY_ICECREAM,
      };

    case BUY_PIZZA:
      return {
        ...state,
        numOfPizzas: state.numOfPizzas - 2,
        lastAction: BUY_PIZZA,
      };

    case BUY_COMBO1:
      return {
        ...state,
        numOfPizzas: state.numOfPizzas - 1,
        numOfIcecreams: state.numOfIcecreams - 1,
        lastAction: BUY_COMBO1,
      };

    case LAST_ACTION:
      return state.lastAction;

    default:
      return state;
  }
}

// createStore is a method that takes reducer as arg to create store
const store = createStore(reducer);
console.log("initial state: ", store.getState());

// subscribe method takes listener(callback) as arg and it will be executed every time the state changes
store.subscribe(() => {
  console.log(store.getState());
  console.log("Action Performed is: ", store.getState().lastAction);
});

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
