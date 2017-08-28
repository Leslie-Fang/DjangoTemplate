import $ from 'jquery';
import {store} from "../../Front_babel/store.js"
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const submitData = (username,password) => {
    console.log("log codedata");
    console.log(username);
    console.log(password);
    return {
        type: 'SUBMIT_DATA',
        state: 'isFetchingdata',
        payload:   ($.ajax({
            method: "POST",
            data: {username: username,password:password},
            url: "/login",
            dataType: "json"
        }).then(function(data){
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'GET_VERYFY_DATA',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};

export const signup = (username,password) => {
    console.log("log codedata");
    console.log(username);
    console.log(password);
    return {
        type: 'SIGNUP_ING',
        state: 'isFetchingdata',
        payload: ($.ajax({
            method: "POST",
            data: {username: username, password: password},
            url: "/login/signup/",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'SIGNUP_ED',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};

export const logout = (username,password) => {
    console.log("logout");
    return {
        type: 'LOGOUT_ING',
        state: 'isFetchingdata',
        payload: ($.ajax({
            method: "POST",
            data: {},
            url: "/logout",
            dataType: "json"
        }).then(function (data) {
            console.log(data);
            console.log('back in ajax!');
            const action = {
                type: 'LOGOUT_ED',
                state: 'finishFetchingdata',
                payload: data
            };
            store.dispatch(action);
            return data;
        }))
    }
};

export const headerInit = (myUserName) => {
    console.log("headerInit");
    console.log(myUserName);
    if(cookies.get('username')){
        myUserName = cookies.get('username');
    }
    return {
        type: 'HEADER_INIT',
        state: 'isFetchingdata',
        payload: {username:myUserName}
    }
};

export const addComment = () => {
    console.log("addComment");
    console.log();
    return {
        type: 'ADD_COMMENT',
        state: 'isFetchingdata',
        payload: {comment:"addComment"}
    }
};

export const saveCurrentComment = (myComment) => {
    console.log("saveCurrentComment");
    return {
        type: 'SAVE_COMMENT',
        state: 'isFetchingdata',
        payload: {comment:myComment}
    }
};


export const undoCurrentComment = () => {
    console.log("undoCurrentComment");
    return {
        type: 'UNDO_COMMENT',
        state: 'isFetchingdata',
        payload: {comment:"mycomment"}
    }
};


export const redoCurrentComment = () => {
    console.log("redoCurrentComment");
    return {
        type: 'REDO_COMMENT',
        state: 'isFetchingdata',
        payload: {comment:"mycomment"}
    }
};


