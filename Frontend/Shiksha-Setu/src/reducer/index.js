import { combineReducers } from "@reduxjs/toolkit";

const dummyReducer = (state = {}, action) => state;

export default combineReducers({
  dummy: dummyReducer,
});
