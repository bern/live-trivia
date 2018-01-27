import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducer from "./reducers";


export const history = createHistory();//createHistory();

const middleware = applyMiddleware(promise(),
                                    logger,
                                    routerMiddleware(history)
);

export default createStore(reducer, middleware);