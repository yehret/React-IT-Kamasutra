import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddlewear from "redux-thunk";
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddlewear));

window.store = store

export default store;