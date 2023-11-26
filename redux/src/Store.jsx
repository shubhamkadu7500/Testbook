import { createStore } from "redux";
import rootReducer from "./Reducer";

const store = createStore(rootReducer);
// console.log("the store", store);
// console.log("the rootReducer", rootReducer);
export default store;
