import { createStore } from "redux";

const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

const initialState = {
    balance: 1000
};

function bankReducer(state = initialState, action){
    switch(action.type){
        case DEPOSIT: return {
            ...state,
            balance: state.balance + action.payload
        }

        case WITHDRAW: return {
            ...state,
            balance: state.balance - action.payload
        }

        default: return state;
    }
};

const store = createStore(bankReducer);

const unsubscribe = store.subscribe(()=>{
    console.log("state changed!",  store.getState());
})

console.log("Initial state: ", store.getState());

store.dispatch({type: DEPOSIT, payload: 500});
store.dispatch({type: WITHDRAW, payload: 300});

unsubscribe();