import { combinedReducers, configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings';

const rootReducer = combinedReducers({
  greetings: greetingsReducer,
});

const store = configureStore({ rootReducer });

export default store;
