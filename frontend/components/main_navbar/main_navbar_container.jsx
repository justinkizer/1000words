import { connect } from 'react-redux';
import MainNavBar from './main_navbar.jsx';
import { logoutUser } from '../../actions/session_actions.js';
import { createPhoto } from '../../actions/user_profile_actions.js';

const mapStateToProps = ({session: {currentUser}}) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavBar);
