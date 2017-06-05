import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
import { fetchUser } from '../../util/user_api_util.js';
import FollowButtonContainer from '../buttons/follow_button_container.jsx';
import DeletePhotoButtonContainer from
  '../buttons/delete_photo_button_container.jsx';

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPhoto: undefined, ownerProfilePic: undefined,
      showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.photos = this.props.photos;
    this.keyThroughPhotos = this.keyThroughPhotos.bind(this);
  }

  close(){
    document.body.removeEventListener('keydown', this.keyThroughPhotos);
    this.setState({ showModal: false});
  }

  keyThroughPhotos(e) {
    if (e.keyCode === 37) {
      if (this.index - 1 < 0) {
        this.open(this.photos[this.photos.length - 1], this.photos.length - 1);
      } else {
        this.open(this.photos[this.index - 1], this.index - 1);
      }
    } else if (e.keyCode === 39) {
      if (this.index + 1 > this.photos.length - 1) {
        this.open(this.photos[0], 0);
      } else {
        this.open(this.photos[this.index + 1], this.index + 1);
      }
    }
  }

  open(photo, index){
    this.index = index;
    document.body.removeEventListener('keydown', this.keyThroughPhotos);
    fetchUser(photo.owner_id).then(user => this.setState({selectedPhoto: photo,
      ownerProfilePic: user.profile_img_url, showModal: true }));
    document.body.addEventListener('keydown', this.keyThroughPhotos);
  }

  render() {
    let photos = <span className="no-photos-found">
      No Photos Found - Discover Others or Upload Your Own</span>;
    let selectedPhotoUrl;

    let followOrDeleteButton = <FollowButtonContainer
      updateTrigger={this.index}
      syncFollowButtons={this.props.syncFollowButtons}
      screenSelected={this.props.screenSelected}
      refreshAfterFollow={this.props.refreshAfterFollow}
      ownerId={this.state.selectedPhoto ? this.state.selectedPhoto.owner_id :
      null} closeModal={this.close} altStyling={"delete"} />;

  if (this.props.currentUser && this.state.selectedPhoto &&
      (this.props.currentUser.id ===
      parseInt(this.state.selectedPhoto.owner_id))) {
        followOrDeleteButton = <DeletePhotoButtonContainer
        closeModal={this.close} resetAfterDelete={this.props.resetAfterDelete}
        photoId={this.state.selectedPhoto.id} />;
    }

    if (this.state.selectedPhoto) {
      selectedPhotoUrl = this.state.selectedPhoto.img_url;
    }

    if (this.props.photos && this.props.photos.length >= 1) {
      this.photos = this.props.photos;
      photos = this.props.photos.map((photo, index) => <Link key={photo.id}
        to={""} onClick={() => this.open(photo, index)}><img
        className="grid-image" src={photo.img_url.replace(/\/upload\//, '/upload/w_500/')} data-aos="fade-up" />
        </Link>);
    }

    return (
      <div>
        <div className="photo-grid">
          {photos}
        </div>

        <Modal aria-labelledby='modal-label' className="modal-style"
          backdropStyle={backdropStyle} show={this.state.showModal}
          onHide={this.close}>

          <div className="photo-modal-dialog" >
            {followOrDeleteButton}

            <div className="photo-show-profile-img">
              <Link to={`/users/${this.state.selectedPhoto ?
                this.state.selectedPhoto.owner_id : null}`}
                onClick={this.close}>
                <img src={this.state.ownerProfilePic} />
              </Link>
            </div>

            <div className="left-arrow-photo-modal" onClick={() =>
              this.keyThroughPhotos({keyCode: 37})}><span>{"<"}</span>
            </div>

          <div className="right-arrow-photo-modal" onClick={() =>
              this.keyThroughPhotos({keyCode: 39})}><span>{">"}</span>
          </div>

          <img src={selectedPhotoUrl} />
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

export default PhotoGrid;
