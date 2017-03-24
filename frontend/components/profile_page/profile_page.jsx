import React from 'react';
import MainNavBarContainer from '../main_navbar/main_navbar_container.jsx';
import FollowButtonContainer from '../buttons/follow_button_container.jsx';
import EditProfileButton from '../buttons/edit_profile_button.jsx';
import PhotoGrid from '../photo_grid/photo_grid.jsx';
import { Link } from 'react-router';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {photosChoice: undefined, profileNavSelection: "My Photos", followButtonStatus: undefined};
    this.choice.bind(this);
    this.update = this.setState.bind(this);
    this.resetAfterAddOrDelete = this.resetAfterAddOrDelete.bind(this);
    this.refreshAfterFollow = this.refreshAfterFollow.bind(this);
    this.syncFollowButtons = this.syncFollowButtons.bind(this);
  }

  componentWillMount() {
    this.props.fetchUser();
    this.props.fetchUserPhotos();
    this.props.fetchAllPhotos();
    this.props.fetchFollowedPhotos();
    if (this.props.currentUser) {
      this.props.fetchFollows();
    }
  }

  resetAfterAddOrDelete() {
    this.props.fetchUserPhotos().then(photos => {
      this.setState({photosChoice: photos.photos});
      setTimeout(AOS.refreshHard, 500);
    });
  }

  refreshAfterFollow(followStatus) {
    if (followStatus === "Follow") {
      this.props.fetchFollowedPhotos();
    } else {
      this.props.fetchFollowedPhotos().then(photos => {
        this.setState({photosChoice: photos.photos});
        setTimeout(AOS.refreshHard, 500);
      });
    }
  }

  componentDidMount() {
    setTimeout(() => this.update({photosChoice: this.props.userPhotos}), 500);
    setTimeout(AOS.refreshHard, 1000);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.id !== this.props.params.id) {
      this.props.fetchUser(newProps.params.id);
      this.props.fetchFollowedPhotos(newProps.params.id);
      this.props.fetchUserPhotos(newProps.params.id).then(photos => {
        this.setState({photosChoice: photos.photos, profileNavSelection: "My Photos"});
        setTimeout(AOS.refreshHard,500);
      });
    }
  }

  choice(photos) {
    return () => {
      if (photos === "followed") {
        this.setState({photosChoice: this.props.followedPhotos, profileNavSelection: "Followed"});
        setTimeout(AOS.refreshHard,600);
        setTimeout(AOS.refreshHard,900);
      } else if (photos === "mine") {
        this.setState({photosChoice: this.props.userPhotos, profileNavSelection: "My Photos"});
        setTimeout(AOS.refreshHard,100);
        setTimeout(AOS.refreshHard,900);
      } else {
        this.setState({photosChoice: this.props.discoverPhotos, profileNavSelection: "Discover"});
        setTimeout(AOS.refreshHard,600);
        setTimeout(AOS.refreshHard,900);
      }
    };
  }

  syncFollowButtons(followStatus) {
    this.setState({followButtonStatus: followStatus});
  }

  render() {
    let followedStyle;
    let myPhotosStyle;
    let discoverStyle;
    if (this.state.profileNavSelection === "My Photos") {
      myPhotosStyle = {"fontWeight": "bold"};
    } else if (this.state.profileNavSelection === "Followed") {
      followedStyle = {"fontWeight": "bold"};
    } else if (this.state.profileNavSelection === "Discover") {
      discoverStyle = {"fontWeight": "bold"};
    }
    let completionBasedDescription;
    let followOrEditProfileButton = <FollowButtonContainer updateTrigger={this.state.followButtonStatus} paramsId={this.props.params.id} ownerId={this.props.userId} />;
    if (this.props.currentUser && (this.props.currentUser.id === parseInt(this.props.userId))) {
      followOrEditProfileButton = <EditProfileButton refreshAfterEdit={this.resetAfterAddOrDelete}/>;
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
              <li><Link to={""} onClick={this.choice("followed")} style={followedStyle}>Followed</Link></li>
              <li><Link to={""} onClick={this.choice("mine")} style={myPhotosStyle}>My Photos</Link></li>
              <li><Link to={""} onClick={this.choice("discover")} style={discoverStyle}>Discover</Link></li>
            </ul>
            {followOrEditProfileButton}
            </div>
          </div>
        </div>
        <PhotoGrid syncFollowButtons={this.syncFollowButtons} screenSelected={this.state.profileNavSelection} refreshAfterFollow={this.refreshAfterFollow} resetAfterDelete={this.resetAfterAddOrDelete} currentUser={this.props.currentUser} photos={photosChoice} />
        <MainNavBarContainer resetAfterAdd={this.resetAfterAddOrDelete}/>
      </div>
    );
  }

}

export default ProfilePage;
