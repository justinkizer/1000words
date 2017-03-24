import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class ProfileEditForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { profileDesc: this.props.currentProfileDesc, profileImgURL: this.props.currentProfileImgURL, coverImgURL: this.props.currentCoverImgURL};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
  }

  update() {
    return e => (
      this.setState({profileDesc: e.target.value})
    );
  }

  componentDidMount(){
    document.getElementById("profileDescription").focus();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUserProfile({id: this.props.currentUser.id, profile_desc: this.state.profileDesc, profile_img_url: this.state.profileImgURL, cover_img_url: this.state.coverImgURL});
    this.props.closeModal();
    if (this.chosenProfileImg) {
      this.props.createPhoto(this.chosenProfileImg);
    }
    if (this.chosenCoverImg) {
      this.props.createPhoto(this.chosenCoverImg);
    }
  }

  upload(imageType) {
    return e => {
      e.preventDefault();
      if (imageType === "Profile") {
        cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
          if (!error) {
            let originalProfilePic = Object.assign({}, results[0]);
            results[0].url = results[0].url.replace(/upload/,"upload/w_450,h_450,c_crop,c_fill,g_face,r_max/w_200");
            results[0].url = results[0].url.substring(0,results[0].url.lastIndexOf(".")).concat(".png");
            this.setState({profileImgURL: results[0].url});
            this.chosenProfileImg = originalProfilePic;
          }
        });
      } else if (imageType === "Cover") {
        cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
          if (!error) {
            this.setState({coverImgURL: results[0].url});
            this.chosenCoverImg = results[0];
          }
        });
      }
    };
  }

  render () {
    return (
      <div className="edit-profile-form">
        <h1>Edit Profile</h1>

        <span className="my-story-text">Description:</span>
        <form onSubmit={this.handleSubmit}>

          <textarea className="profile-description-edit-box" type="text" id="profileDescription" placeholder="Tell your story!" value={this.state.profileDesc} onChange={this.update()}/>
          <br/>
          <br/>
          <button onClick={this.upload("Profile")} className="upload-profile-photo-button">Upload a Profile Photo</button>
          <br/>
          <br/>
          <button onClick={this.upload("Cover")} className="upload-cover-photo-button">Upload a Cover Photo</button>
          <br/>
          <br/>
          <button onClick={this.handleSubmit} className="save-profile-changes-button" type="submit">Save Changes</button>
          <br/>
          <br/>
        </form>
      </div>
    );
  }
}

export default ProfileEditForm;
