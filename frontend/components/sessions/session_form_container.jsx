import React from 'react';
import { connect } from 'react-redux';
import { signupUser, loginUser } from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.loggedIn,
  errors: state.errors,
  formType: ownProps.location.pathname
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let form = ownProps.location.pathname === "/login" ? loginUser : signupUser;
  return {
    processForm: user => dispatch(form(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
