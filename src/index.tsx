import {combineReducers, createStore} from "redux";
import {userReducer} from "./user/reducers";
import {render} from "react-dom";
import {App} from "./app/app";
const reducers = combineReducers({
    user: userReducer
});

const store = createStore(reducers, {});
store.subscribe(() => {
    console.log("changed", store.getState());
});

store.dispatch({type: "INC", payload: 100});
store.dispatch({type: "INC", payload: 10});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 101});

render(<App />, document.getElementById("container"));