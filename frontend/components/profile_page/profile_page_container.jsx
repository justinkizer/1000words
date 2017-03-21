import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './profile_page.jsx';
import { fetchUser, fetchUserPhotos, fetchAllPhotos } from '../../actions/user_profile_actions.js';

const mapStateToProps = ({session: {currentUser}, userProfile: {userId, username, profileDesc, profileImgUrl, coverImgUrl, userPhotos, followsPhotos, discoverPhotos}}) => ({
  userId,
  username,
  profileDesc,
  profileImgUrl,
  coverImgUrl,
  userPhotos,
  followsPhotos,
  discoverPhotos,
  currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id || ownProps.params.id)),
  fetchUserPhotos: id => dispatch(fetchUserPhotos(id || ownProps.params.id)),
  fetchAllPhotos: () => dispatch(fetchAllPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
