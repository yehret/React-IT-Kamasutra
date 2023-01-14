import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddlewear from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer";
import { compose } from "redux";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddlewear)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddlewear));



window.__store__ = store

export default store;