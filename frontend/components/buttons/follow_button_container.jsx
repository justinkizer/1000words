import { connect } from 'react-redux';
import { createFollowing, deleteFollowing } from '../../actions/user_profile_actions.js';
import FollowButton from './follow_button.jsx';

const mapStateToProps = (state, ownProps) => ({
  currentUserFollows: state.userProfile.currentUserFollows,
  ownerId: ownProps.ownerId,
  paramsId: ownProps.paramsId,
  currentUser: state.session.currentUser,
  refreshAfterFollow: ownProps.refreshAfterFollow,
  updateTrigger: ownProps.updateTrigger
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createFollowing: followeeId => dispatch(createFollowing(followeeId)),
  deleteFollowing: followeeId => dispatch(deleteFollowing(followeeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
