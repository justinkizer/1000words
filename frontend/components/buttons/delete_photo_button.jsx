import React from 'react';
import { deletePhoto } from '../../actions/user_profile_actions.js';

const DeletePhotoButton = (props) => (
  <div className="delete-button-spacer">

  <button className="delete-button" onClick={() => {
    props.deletePhoto(props.photoId);
    props.closeModal();
    setTimeout(props.resetAfterDelete, 250);}}>
    Delete Photo
  </button>

  </div>
);

export default DeletePhotoButton;
