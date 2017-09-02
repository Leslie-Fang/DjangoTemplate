'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer = require('./reducer1.js');

var allReducers = (0, _redux.combineReducers)({
    login: _reducer.login,
    signup: _reducer.signup,
    logout: _reducer.logout,
    headerInitState: _reducer.headerInitState,
    saveCurrentCommentState: _reducer.saveCurrentCommentState,
    undoRedoCommentState: _reducer.undoRedoCommentState
});

exports.default = allReducers;