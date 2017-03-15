import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../../actions/session_actions.js';

const initialState = {currentUser: null, errors: []};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    case RECEIVE_ERRORS:
      let errors = {currentUser: null, errors: action.errors};
      return Object.assign(newState, errors);
    default:
      return state;
  }
};

export default SessionReducer;
