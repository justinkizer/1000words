import React from 'react';
import { Modal } from 'react-bootstrap';
import ProfileEditFormContainer from '../profile_page_edit_form/profile_page_edit_form_container.jsx';
import { createPhoto } from '../../actions/user_profile_actions.js';

class EditProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.createPhoto = createPhoto.bind(this);
    this.closing = false;
  }

  close(){
    this.closing = true;
    this.setState({ showModal: false});
  }

  open(){
    this.closing = false;
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <button className="edit-button" onClick={this.open}>Edit</button>

        <Modal
          aria-labelledby='modal-label'
          className="modal-style"
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
        >
          <div className="profile-edit-modal-dialog" >
            <ProfileEditFormContainer rootPath={this.props.rootPath} closing={this.closing} closeModal={this.close} location={{pathname: this.formPath}}/>
          </div>

        </Modal>
      </div>
    );
  }

}

const backdropStyle = {
  position: 'fixed',
  top: 0, bottom: 0, left: 0, right: 0,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.6
};

export default EditProfileButton;
