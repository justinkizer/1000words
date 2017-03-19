import React from 'react';
import MainNavBarContainer from '../main_navbar/main_navbar_container.jsx';
import FollowButton from '../buttons/follow_button.jsx';
import EditProfileButton from '../buttons/edit_profile_button.jsx';
import PhotoGrid from '../photo_grid/photo_grid.jsx';
import { Link } from 'react-router';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUser();
  }

  componentWillUpdate() {
    this.props.fetchUser();
  }

  render() {
    let followOrEditProfileButton = <FollowButton />;
    let ownProfileLinks;
    if (this.props.currentUser && (this.props.currentUser.id === parseInt(this.props.userId))) {
      followOrEditProfileButton = <EditProfileButton />;
      ownProfileLinks = (
        <ul className="user-profile-nav">
          <li>Followed</li>
          <li>My Photos</li>
          <li>Discover</li>
        </ul>
      );
    }

    return (
      <div>
        <div className="parallax">
          <img className="cover-photo parallax__layer parallax__layer--back" src={this.props.coverImgUrl}></img>
          <div className="cover-photo-spacer parallax__layer parallax__layer--base">
            <img className="profile-photo" src={this.props.profileImgUrl}></img>
            {followOrEditProfileButton}
          </div>
          <ul className="username-and-description">
            <li>{this.props.username}</li>
            <li>{this.props.profileDesc}</li>
          </ul>
          {ownProfileLinks}
          <PhotoGrid />
        </div>
        <MainNavBarContainer />
      </div>
    );
  }

}

export default ProfilePage;
