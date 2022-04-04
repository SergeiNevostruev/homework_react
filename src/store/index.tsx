import { combineReducers } from 'redux';
import userInfoReducer from './user/reducer';
import userRegReducer from './regstore/reducer';

export default combineReducers({
  userInfoReducer,
  userRegReducer,
});
