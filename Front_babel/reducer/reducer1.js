'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by leslie on 2017/7/19.
 */
var userData = "Vistor";

var logout = exports.logout = function logout() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { logout: null };
    var action = arguments[1];

    switch (action.type) {
        case 'LOGOUT_ING':
            console.log('try log out');
            //console.log(action.payload);
            return Object.assign({}, state, { logout: action.payload });
        case 'LOGOUT_ED':
            console.log('LOGOUT_ED');
            //console.log(action.payload.state);
            if (action.payload.state == 'confirm_logout') {
                window.location.href = '/login';
                alert('Log out. Please log in again');
            } else {
                window.location.href = '/login';
                alert('Log out failed');
            }
            return Object.assign({}, state, { logout: action.payload });
        default:
            console.log('return the defalut logoutData', state, 'and action', action);
            return Object.assign({}, state);
    }
};

var signup = exports.signup = function signup() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { signip: null };
    var action = arguments[1];

    switch (action.type) {
        case 'SIGNUP_ING':
            console.log('SUBMIT_SIGNUP_DATA');
            //console.log(action.payload);
            return Object.assign({}, state, { signup: action.payload });
        case 'SIGNUP_ED':
            console.log('SIGNUP_ED');
            console.log(action.payload);
            console.log(action.payload.state);
            if (action.payload.state == 'userExsit') {
                window.location.href = '/signup';
                alert('The username exsits, please select another one.');
            } else if (action.payload.state.toUpperCase() == 'OK') {
                console.log('jump to login');
                window.location.href = '/login';
            }
            return Object.assign({}, state, { signup: action.payload });
        default:
            console.log('return the defalut signupData', state, 'and action', action);
            return Object.assign({}, state);
    }
};

var login = exports.login = function login() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { login: null };
    var action = arguments[1];

    switch (action.type) {
        case 'SUBMIT_DATA':
            console.log('SUBMIT_DATA');
            //console.log(action.payload);
            return Object.assign({}, state, { login: action.payload.user });
        case 'GET_VERYFY_DATA':
            console.log('GET_VERYFY_DATA');
            //console.log(action.payload.state);
            if (action.payload.state == 'nouser') {
                window.location.href = '/signup';
                alert('user does not exsit, please signup');
            } else if (action.payload.state == 'nopassword') {
                window.location.href = '/login';
                alert('Wrong password! please input again');
            } else if (action.payload.state == 'ok') {
                window.location.href = '/';
            }
            console.log("Sure =============> GET_VERYFY_DATA", state, 'and action', action);
            //console.log(action.payload.user);
            //console.log(Object.assign({},state,{username:action.payload.user}));
            //return action.payload.user;
            return Object.assign({}, state, { login: action.payload.user });
        default:
            console.log('return the defalut loginData', state, 'and action', action);
            //console.log(state);
            return Object.assign({}, state);
    }
};

var headerInitState = exports.headerInitState = function headerInitState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { username: null };
    var action = arguments[1];

    switch (action.type) {
        case 'HEADER_INIT':
            console.log('return the HEADER_INIT pageInit', state, 'and action', action);
            //console.log(action.payload.username);
            //console.log(Object.assign({},state,{username:action.payload.username}));
            return Object.assign({}, state, { username: action.payload.username });
        default:
            console.log('return the defalut pageInit', state, 'and action', action);
            return Object.assign({}, state);
    }
};

var saveCurrentCommentState = exports.saveCurrentCommentState = function saveCurrentCommentState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { currentComment: null };
    var action = arguments[1];

    switch (action.type) {
        case 'SAVE_COMMENT':
            console.log('return the saveCurrentComment', state, 'and action', action);
            //console.log(action.payload.username);
            //console.log(Object.assign({},state,{username:action.payload.username}));
            return Object.assign({}, state, { currentComment: action.payload.comment });
        default:
            console.log('return the defalut saveCurrentComment', state, 'and action', action);
            return Object.assign({}, state);
    }
};

var highOrdersaveCurrentCommentState = function highOrdersaveCurrentCommentState(reducer) {
    //for pastComment currentComment and futureComment: each one is a state or state array
    var initialState = {
        pastComment: [],
        currentComment: reducer({ currentComment: null }, {}),
        futureComment: []
    };

    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];
        var pastComment = state.pastComment,
            currentComment = state.currentComment,
            futureComment = state.futureComment;


        switch (action.type) {
            case 'UNDO_COMMENT':
                console.log('return the highOrdersaveCurrentCommentState', state, 'and action', action);
                //console.log(action.payload.username);
                //console.log(Object.assign({},state,{username:action.payload.username}));
                var newpastComment = pastComment.slice(0, pastComment.length - 1);
                var previousComment = pastComment[pastComment.length - 1];
                futureComment.push(currentComment);
                console.log("=========>");
                console.log(previousComment);
                return {
                    pastComment: newpastComment,
                    currentComment: previousComment,
                    futureComment: futureComment
                };
            //return Object.assign({}, state, {comment: action.payload.comment});
            case 'REDO_COMMENT':
                console.log('return the highOrdersaveCurrentCommentState', state, 'and action', action);
                pastComment.push(currentComment);
                var nextComment = futureComment[futureComment.length - 1];
                var newfutureComment = futureComment.slice(0, futureComment.length - 1);
                return {
                    pastComment: pastComment,
                    currentComment: nextComment,
                    futureComment: newfutureComment
                };
            default:
                console.log('return the defalut highOrdersaveCurrentCommentState', state, 'and action', action);
                var newcurrentComment = reducer(currentComment, action);
                if (newcurrentComment === currentComment) {
                    return state;
                }
                pastComment.push(currentComment);
                return {
                    pastComment: pastComment,
                    currentComment: newcurrentComment,
                    futureComment: []
                };
        }
    };
};

var undoRedoCommentState = exports.undoRedoCommentState = highOrdersaveCurrentCommentState(saveCurrentCommentState);