import {combineReducers} from 'redux';
import {logout} from './reducer1.js';

const allReducers = combineReducers({
    logout: logout
});

export default allReducers;