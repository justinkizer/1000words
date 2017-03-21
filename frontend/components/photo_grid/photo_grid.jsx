import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';

class PhotoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPhoto: undefined, showModal: false};
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
    this.setState({selectedPhoto: photo, showModal: true });
    document.body.addEventListener('keydown', this.keyThroughPhotos);
  }

  render() {
    let photos;
    let selectedPhotoUrl;
    if (this.state.selectedPhoto) {
      selectedPhotoUrl = this.state.selectedPhoto.img_url;
    }
    if (this.props.photos) {
      this.photos = this.props.photos;
      photos = this.props.photos.map((photo, index) => <Link key={photo.id} to={""} onClick={() => this.open(photo, index)}><img className="grid-image" src={photo.img_url} data-aos="fade-up"/></Link>);
    }

    return (
      <div>
        <div className="photo-grid">
          {photos}
        </div>
        <Modal
          aria-labelledby='modal-label'
          className="modal-style"
          backdropStyle={backdropStyle}
          show={this.state.showModal}
          onHide={this.close}
          >
          <div className="photo-modal-dialog" >
            <img src={selectedPhotoUrl}/>
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
