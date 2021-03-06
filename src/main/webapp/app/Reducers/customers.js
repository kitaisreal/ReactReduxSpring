import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';

const customer=(state=[],action)=> {
    switch (action.type) {
        case 'CUSTOMER_REGISTRATION':
            console.log("REGISTRATION SUCCESS");
            return state;
        case 'CUSTOMER_AUTHORIZATION':
            console.log("AUTHORIZATION SUCCESS");
            return action.customer;
        case 'CUSTOMER_LOG_OUT':
            console.log("CUSTOMER LOG OUT");
            return {};
        default:
            return state;
    }
};
export default customer;