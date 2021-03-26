import React from 'react';
import {combineReducers, createStore} from "redux";
import usersReduser from "./users-reduser";

let redusers = combineReducers({
    usersPage: usersReduser
})

let store = createStore(redusers);

window.store = store

export default store;