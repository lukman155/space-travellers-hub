import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './Mission/mission';

const rootReducer = combineReducers({
  missions: missionsReducer,
  // Add reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
