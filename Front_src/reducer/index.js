import {combineReducers} from 'redux';
import {login,signup,logout,headerInitState,saveCurrentCommentState,undoRedoCommentState} from './reducer1.js';

const allReducers = combineReducers({
    login: login,
    signup: signup,
    logout: logout,
    headerInitState: headerInitState,
    saveCurrentCommentState: saveCurrentCommentState,
    undoRedoCommentState: undoRedoCommentState
});

export default allReducers;