import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {App} from "../app/app";


export const routes = (
    <Router history={history}>
        <Route path="/" component={App}></Route>
    </Router>
);