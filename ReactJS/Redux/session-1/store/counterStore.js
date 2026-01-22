import counterReducer from "./counterReducer.js";
import { legacy_createStore } from 'https://cdn.skypack.dev/redux';

const counterStore = legacy_createStore(counterReducer);

export default counterStore;