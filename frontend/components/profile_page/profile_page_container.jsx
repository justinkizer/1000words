import React from 'react';
import { connect } from 'react-redux';
import ProfilePage from './profile_page.jsx';
import { fetchUser, fetchUserPhotos, fetchAllPhotos, fetchFollowedPhotos, fetchFollows } from '../../actions/user_profile_actions.js';

const mapStateToProps = ({session: {currentUser}, userProfile: {userId, username, profileDesc, profileImgUrl, coverImgUrl, userPhotos, followedPhotos, discoverPhotos, currentUserFollows}}) => ({
  userId,
  username,
  profileDesc,
  profileImgUrl,
  coverImgUrl,
  userPhotos,
  followedPhotos,
  discoverPhotos,
  currentUser,
  currentUserFollows
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id || ownProps.params.id)),
  fetchUserPhotos: id => dispatch(fetchUserPhotos(id || ownProps.params.id)),
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  fetchFollowedPhotos: id => dispatch(fetchFollowedPhotos(id || ownProps.params.id)),
  fetchFollows: id => dispatch(fetchFollows(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);
