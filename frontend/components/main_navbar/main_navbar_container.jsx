import { connect } from 'react-redux';
import MainNavBar from './main_navbar.jsx';
import { logoutUser } from '../../actions/session_actions.js';

const mapStateToProps = ({session: {currentUser}}) => ({
  currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavBar);
