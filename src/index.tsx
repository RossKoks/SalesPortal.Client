import { combineReducers, createStore } from "redux";
import {AppModel} from "./global/model";

const reducer = (state: AppModel, action : any) => {
    return state;
};

const store  = createStore(reducer, 0);
store.subscribe(() => {
    console.log("changed", store.getState());
});

store.dispatch({type: "INC", payload: 100});
store.dispatch({type: "INC", payload: 10});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 101});