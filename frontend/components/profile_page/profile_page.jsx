import React from 'react';
import MainNavBarContainer from '../main_navbar/main_navbar_container.jsx';
import FollowButton from '../buttons/follow_button.jsx';
import EditProfileButton from '../buttons/edit_profile_button.jsx';
import PhotoGrid from '../photo_grid/photo_grid.jsx';
import { Link } from 'react-router';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photosChoice: undefined};
    this.choice.bind(this);
    this.update = this.setState.bind(this);
    this.resetAfterAddOrDelete = this.resetAfterAddOrDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser();
    this.props.fetchUserPhotos();
    this.props.fetchAllPhotos();
  }

  resetAfterAddOrDelete() {
    this.props.fetchUserPhotos().then(photos => {
      this.setState({photosChoice: photos.photos});
      setTimeout(AOS.refreshHard, 500);
    });
  }

  componentDidMount() {
    setTimeout(() => this.update({photosChoice: this.props.userPhotos}), 500);
    setTimeout(AOS.refreshHard, 1000);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.fetchUser(newProps.params.id);
      this.props.fetchUserPhotos(newProps.params.id).then(photos => {
        this.setState({photosChoice: photos.photos});
        setTimeout(AOS.refreshHard,500);
      });
    }
  }

  choice(photos) {
    return () => {
      if (photos === "followed") {
        this.setState({photosChoice: this.props.followsPhotos});
        setTimeout(AOS.refreshHard,600);
        // setTimeout(AOS.refreshHard,900);
      } else if (photos === "mine") {
        this.setState({photosChoice: this.props.userPhotos});
        setTimeout(AOS.refreshHard,100);
        // setTimeout(AOS.refreshHard,300);
      } else {
        this.setState({photosChoice: this.props.discoverPhotos});
        setTimeout(AOS.refreshHard,600);
        // setTimeout(AOS.refreshHard,100);
      }
    };
  }

  render() {
    let completionBasedDescription;
    let followOrEditProfileButton = <FollowButton />;
    if (this.props.currentUser && (this.props.currentUser.id === parseInt(this.props.userId))) {
      followOrEditProfileButton = <EditProfileButton />;
      completionBasedDescription = this.props.profileDesc || 'Thanks for joining! Customize your profile now or start exploring!';
    } else {
      completionBasedDescription = this.props.profileDesc || "This user hasn't written a Profile Description yet, but feel free to imagine something really inspiring!";
    }
    let photosChoice = this.state.photosChoice;
    return (
      <div>
        <div className="parallax">
          <img className="cover-photo parallax__layer parallax__layer--back" src={this.props.coverImgUrl}></img>
          <div className="cover-photo-spacer parallax__layer parallax__layer--base">
            <div className="profile-and-description">
            <img className="profile-photo" src={this.props.profileImgUrl}></img>
            <ul className="username-and-description">
              <li>{this.props.username}</li>
              <li>{completionBasedDescription}</li>
            </ul>
            <a name="profile-nav" />
            <ul className="user-profile-nav">
              <li><Link to={""} onClick={this.choice("followed")}>Followed</Link></li>
              <li><Link to={""} onClick={this.choice("mine")}>My Photos</Link></li>
              <li><Link to={""} onClick={this.choice("discover")}>Discover</Link></li>
            </ul>
            {followOrEditProfileButton}
            </div>
          </div>
        </div>
        <PhotoGrid resetAfterDelete={this.resetAfterAddOrDelete} currentUser={this.props.currentUser} photos={photosChoice} />
        <MainNavBarContainer resetAfterAdd={this.resetAfterAddOrDelete}/>
      </div>
    );
  }

}

export default ProfilePage;
