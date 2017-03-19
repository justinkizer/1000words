import { combineReducers } from 'redux';
import SessionReducer from './sessions/session_reducer.js';
import UserProfileReducer from './user/user_reducer.js';

const rootReducer = combineReducers({
  session: SessionReducer,
  userProfile: UserProfileReducer
});

export default rootReducer;
