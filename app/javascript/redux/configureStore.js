import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings';

const rootReducer = combineReducers({
  greetings: greetingsReducer,
});

const store = configureStore({ rootReducer });

export default store;
