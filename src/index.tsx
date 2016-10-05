import {combineReducers, createStore} from "redux";
import {userReducer} from "./user/reducers";
import React from "react";
import {render} from "react-dom";
import {App} from "./app/app";
import {Provider} from "react-redux";

const reducers = combineReducers({
    user: userReducer
});

const store = createStore(reducers, {});
store.subscribe(() => {
    console.log("changed", store.getState());
});

render(<Provider store={store}><App></App></Provider>, document.getElementById("container"));