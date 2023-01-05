import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsReducer from './Mission/mission';

import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
