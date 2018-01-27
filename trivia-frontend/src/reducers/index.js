import { combineReducers } from "redux";
import questionReducer from './questionReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    question:questionReducer,
    router: routerReducer
});