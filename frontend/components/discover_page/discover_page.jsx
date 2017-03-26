import React from 'react';
import MainNavBarContainer from '../main_navbar/main_navbar_container.jsx';
import FollowButtonContainer from '../buttons/follow_button_container.jsx';
import PhotoGrid from '../photo_grid/photo_grid.jsx';
import { Link } from 'react-router';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.setState.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllPhotos().then(photos =>
      setTimeout(AOS.refreshHard,7000));
    setTimeout(AOS.refreshHard,8000);
    setTimeout(AOS.refreshHard,9000);
    setTimeout(AOS.refreshHard,10000);
    setTimeout(AOS.refreshHard,11000);
    if (this.props.currentUser) {
      this.props.fetchFollows();
    }
  }

  render() {

    return (
      <div>
        <h1 className="discover-text">
          {"Discover stories from around the world,"}
        </h1>
        <h1 className="discover-text-two">{"and beyond..."}</h1>
        <div className="discover-photo-grid">
        <img src={"http://res.cloudinary.com/one-thousand-words/image/upload/"
          + "v1490312886/abfugklt1nfdxhmfvuwx.jpg"}>
        </img>

        <PhotoGrid currentUser={this.props.currentUser}
          photos={this.props.discoverPhotos} />
        <MainNavBarContainer />

        </div>
      </div>
    );
  }

}

export default DiscoverPage;
