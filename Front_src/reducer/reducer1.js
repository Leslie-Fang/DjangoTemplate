/**
 * Created by leslie on 2017/7/19.
 */
var userData="Vistor";

export var logout = function(state = {logout:null},action){
    switch (action.type) {
        case 'LOGOUT_ING':
            console.log('try log out');
            //console.log(action.payload);
            return Object.assign({},state,{logout:action.payload});
        case 'LOGOUT_ED':
            console.log('LOGOUT_ED');
            //console.log(action.payload.state);
            if(action.payload.state == 'confirm_logout' ){
                window.location.href = '/login';
                alert('Log out. Please log in again');
            }else{
                window.location.href = '/login';
                alert('Log out failed');
            }
            return Object.assign({},state,{logout:action.payload});
        default:
            console.log('return the defalut logoutData',state, 'and action', action);
            return Object.assign({},state);
    }
};

export var signup = function(state = {signip:null},action){
    switch (action.type) {
    case 'SIGNUP_ING':
        console.log('SUBMIT_SIGNUP_DATA');
        //console.log(action.payload);
        return Object.assign({},state,{signup:action.payload});
    case 'SIGNUP_ED':
        console.log('SIGNUP_ED');
        //console.log(action.payload.state);
        if(action.payload.state == 'userExsit' ){
            window.location.href = '/signup';
            alert('The username exsits, please select another one.');
        }else if(action.payload.state == 'ok'){
            window.location.href = '/login';
        }
        return Object.assign({},state,{signup:action.payload});
    default:
        console.log('return the defalut signupData',state, 'and action', action);
        return Object.assign({},state);
    }
};

export var login = function(state = {login:null},action){
    switch (action.type) {
        case 'SUBMIT_DATA':
            console.log('SUBMIT_DATA');
            //console.log(action.payload);
            return Object.assign({},state,{login:action.payload.user});
        case 'GET_VERYFY_DATA':
            console.log('GET_VERYFY_DATA');
            //console.log(action.payload.state);
            if(action.payload.state == 'nouser' ){
                window.location.href = '/signup';
                alert('user does not exsit, please signup');
            }else if(action.payload.state == 'nopassword'){
                window.location.href = '/login';
                alert('Wrong password! please input again');
            }else if(action.payload.state == 'ok'){
                window.location.href = '/';
            }
            console.log("Sure =============> GET_VERYFY_DATA",state, 'and action', action);
            //console.log(action.payload.user);
            //console.log(Object.assign({},state,{username:action.payload.user}));
            //return action.payload.user;
            return Object.assign({},state,{login:action.payload.user});
        default:
            console.log('return the defalut loginData',state, 'and action', action);
            //console.log(state);
            return Object.assign({},state);
    }
};

export var headerInitState = function(state = {username:null},action){
    switch (action.type) {
        case 'HEADER_INIT':
            console.log('return the HEADER_INIT pageInit',state, 'and action', action);
            //console.log(action.payload.username);
            //console.log(Object.assign({},state,{username:action.payload.username}));
            return Object.assign({},state,{username:action.payload.username});
        default:
            console.log('return the defalut pageInit',state, 'and action', action);
            return Object.assign({},state);
    }
};

export var saveCurrentCommentState = function(state = {currentComment:null},action){
    switch (action.type) {
        case 'SAVE_COMMENT':
            console.log('return the saveCurrentComment',state, 'and action', action);
            //console.log(action.payload.username);
            //console.log(Object.assign({},state,{username:action.payload.username}));
            return Object.assign({},state,{currentComment:action.payload.comment});
        default:
            console.log('return the defalut saveCurrentComment',state, 'and action', action);
            return Object.assign({},state);
    }
};

var highOrdersaveCurrentCommentState = function(reducer){
//for pastComment currentComment and futureComment: each one is a state or state array
    const initialState = {
        pastComment: [],
        currentComment: reducer({currentComment:null}, {}),
        futureComment: []
    };

    return function (state = initialState, action) {
        const { pastComment, currentComment, futureComment } = state;

        switch (action.type) {
            case 'UNDO_COMMENT':
                console.log('return the highOrdersaveCurrentCommentState', state, 'and action', action);
                //console.log(action.payload.username);
                //console.log(Object.assign({},state,{username:action.payload.username}));
                const newpastComment = pastComment.slice(0, pastComment.length - 1);
                const previousComment = pastComment[pastComment.length - 1];
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
                const nextComment = futureComment[futureComment.length - 1];
                const newfutureComment = futureComment.slice(0, futureComment.length - 1);
                return {
                    pastComment: pastComment,
                    currentComment: nextComment,
                    futureComment: newfutureComment
                };
            default:
                console.log('return the defalut highOrdersaveCurrentCommentState', state, 'and action', action);
                const newcurrentComment = reducer(currentComment, action);
                if (newcurrentComment === currentComment) {
                    return state
                }
                pastComment.push(currentComment);
                return {
                    pastComment: pastComment,
                    currentComment: newcurrentComment,
                    futureComment: []
                }
        }
    }
};

export var undoRedoCommentState = highOrdersaveCurrentCommentState(saveCurrentCommentState);

