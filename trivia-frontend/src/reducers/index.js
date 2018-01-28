import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import questionReducer from './questionReducer';
import answerReducer from './answerReducer';

export default combineReducers({
    question: questionReducer,
    answer: answerReducer,
    router: routerReducer
});