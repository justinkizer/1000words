import React from 'react';
import { connect } from 'react-redux';
import ProfileEditForm from './profile_page_edit_form.jsx';
import { createPhoto, updateUserProfile } from '../../actions/user_profile_actions.js';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors,
  closing: ownProps.closing,
  closeModal: ownProps.closeModal,
  currentProfileDesc: state.userProfile.profileDesc,
  currentProfileImgURL: state.userProfile.profileImgUrl,
  currentCoverImgURL: state.userProfile.coverImgUrl,
  rootPath: ownProps.rootPath
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateUserProfile: user => dispatch(updateUserProfile(user)),
    createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileEditForm);
