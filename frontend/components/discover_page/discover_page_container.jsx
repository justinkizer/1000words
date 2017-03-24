import React from 'react';
import { connect } from 'react-redux';
import DiscoverPage from './discover_page.jsx';
import { fetchUser, fetchAllPhotos, fetchFollows } from '../../actions/user_profile_actions.js';

const mapStateToProps = ({session: {currentUser}, userProfile: { discoverPhotos, currentUserFollows}}) => ({
  discoverPhotos,
  currentUser,
  currentUserFollows
});

const mapDispatchToProps = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  fetchFollows: id => dispatch(fetchFollows(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverPage);
