import { configureStore, combineReducers } from '@reduxjs/toolkit';

import pinReducer from './pinSlice';
import markerReducer from './markerSlice';

const rootReducer = combineReducers({
  pins: pinReducer,
  markers: markerReducer,
});

export default configureStore({
  reducer: rootReducer,
});
