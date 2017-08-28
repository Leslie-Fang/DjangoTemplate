'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.redoCurrentComment = exports.undoCurrentComment = exports.saveCurrentComment = exports.addComment = exports.headerInit = exports.logout = exports.signup = exports.submitData = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _store = require('../../Front_babel/store.js');

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookies = new _universalCookie2.default();

var submitData = exports.submitData = function submitData(username, password) {
    console.log("log codedata");
    console.log(username);
    console.log(password);
    return {
        type: 'SUBMIT_DATA',
        state: 'isFetchingdata',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: { username: username, password: password },
            url: "/login",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            var action = {
                type: 'GET_VERYFY_DATA',
                state: 'finishFetchingdata',
                payload: data
            };
            _store.store.dispatch(action);
            return data;
        })
    };
};

var signup = exports.signup = function signup(username, password, csrftoken) {
    console.log("log codedata");
    console.log(username);
    console.log(password);
    console.log("in signup action ===========>");
    console.log(csrftoken);
    return {
        type: 'SIGNUP_ING',
        state: 'isFetchingdata',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: { username: username, password: password },
            headers: { "X-CSRFToken": csrftoken },
            url: "/login/signup/",
            dataType: "json",
            complete: function complete(data) {
                console.log(data);
                console.log(data.responseText);
                console.log('back in ajax!');
                var action = {
                    type: 'SIGNUP_ED',
                    state: 'finishFetchingdata',
                    payload: { state: data.responseText }
                };
                _store.store.dispatch(action);
                return data;
            }
        })
    };
};

var logout = exports.logout = function logout(username, password) {
    console.log("logout");
    return {
        type: 'LOGOUT_ING',
        state: 'isFetchingdata',
        payload: _jquery2.default.ajax({
            method: "POST",
            data: {},
            url: "/logout",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            var action = {
                type: 'LOGOUT_ED',
                state: 'finishFetchingdata',
                payload: data
            };
            _store.store.dispatch(action);
            return data;
        })
    };
};

var headerInit = exports.headerInit = function headerInit(myUserName) {
    console.log("headerInit");
    console.log(myUserName);
    if (cookies.get('username')) {
        myUserName = cookies.get('username');
    }
    return {
        type: 'HEADER_INIT',
        state: 'isFetchingdata',
        payload: { username: myUserName }
    };
};

var addComment = exports.addComment = function addComment() {
    console.log("addComment");
    console.log();
    return {
        type: 'ADD_COMMENT',
        state: 'isFetchingdata',
        payload: { comment: "addComment" }
    };
};

var saveCurrentComment = exports.saveCurrentComment = function saveCurrentComment(myComment) {
    console.log("saveCurrentComment");
    return {
        type: 'SAVE_COMMENT',
        state: 'isFetchingdata',
        payload: { comment: myComment }
    };
};

var undoCurrentComment = exports.undoCurrentComment = function undoCurrentComment() {
    console.log("undoCurrentComment");
    return {
        type: 'UNDO_COMMENT',
        state: 'isFetchingdata',
        payload: { comment: "mycomment" }
    };
};

var redoCurrentComment = exports.redoCurrentComment = function redoCurrentComment() {
    console.log("redoCurrentComment");
    return {
        type: 'REDO_COMMENT',
        state: 'isFetchingdata',
        payload: { comment: "mycomment" }
    };
};