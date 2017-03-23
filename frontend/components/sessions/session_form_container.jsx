import React from 'react';
import { connect } from 'react-redux';
import { signupUser, loginUser } from '../../actions/session_actions.js';
import SessionForm from './session_form.jsx';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  closing: ownProps.closing,
  rootPath: ownProps.rootPath,
  followUponLogin: ownProps.followUponLogin
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signupUser: user => dispatch(signupUser(user)),
    loginUser: user => dispatch(loginUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
