var userData="Vistor";

export var logout = function(state = {logout:null},action){
    switch (action.type) {
        case 'LOGOUT_ING':
            console.log('try log out');
            //console.log(action.payload);
            return Object.assign({},state,{logout:action.payload});
        default:
            console.log('return the defalut logoutData',state, 'and action', action);
            return Object.assign({},state);
    }
};