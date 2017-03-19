import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './profile_page.jsx';
import { fetchUser } from '../../actions/user_profile_actions.js';

const mapStateToProps = ({session: {currentUser}, userProfile: {userId, username, profileDesc, profileImgUrl, coverImgUrl, userPhotos, followsPhotos}}) => ({
  userId,
  username,
  profileDesc,
  profileImgUrl,
  coverImgUrl,
  userPhotos,
  followsPhotos,
  currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => dispatch(fetchUser(ownProps.params.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
