import { combineReducers, legacy_createStore } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";

const rootreducer=combineReducers({
    library:reducerAddBooks
})
const store = legacy_createStore(rootreducer)
export default store;