import { legacy_createStore as createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./Reducers";
const composeEnhencers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(
    reducers,
    composeEnhencers(applyMiddleware(thunk))
)

export default store