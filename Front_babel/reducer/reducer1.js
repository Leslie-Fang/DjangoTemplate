'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var userData = "Vistor";

var logout = exports.logout = function logout() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { logout: null };
    var action = arguments[1];

    switch (action.type) {
        case 'LOGOUT_ING':
            console.log('try log out');
            //console.log(action.payload);
            return Object.assign({}, state, { logout: action.payload });
        default:
            console.log('return the defalut logoutData', state, 'and action', action);
            return Object.assign({}, state);
    }
};