import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer.js';

const middleware = [thunk];
const initialState = {
    items:[],
    customer:{},
    attributesItem:[],
    attributesCustomer:[],
    singleItem:{},
    search:''
};

const configureStore =()=>{
    const store =createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
    return store;
};
export default configureStore;