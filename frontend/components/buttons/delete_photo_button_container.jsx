import { connect } from 'react-redux';
import { deletePhoto } from '../../actions/user_profile_actions.js';
import DeletePhotoButton from './delete_photo_button.jsx';

const mapStateToProps = (state, ownProps) => ({
  photoId: ownProps.photoId,
  resetAfterDelete: ownProps.resetAfterDelete
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  deletePhoto: id => dispatch(deletePhoto(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePhotoButton);
