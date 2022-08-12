import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";
import thunk from "redux-thunk";
import reducerFetchedBooks from "./reducers/reducerFetchBooks";
const rootreducer=combineReducers({
    library:reducerAddBooks,
    search : reducerFetchedBooks
})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk))
export default store;