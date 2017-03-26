import React from 'react';
import MainNavBarContainer from '../main_navbar/main_navbar_container.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hereButtonClicked: false};
    this.resetHereButtonClicked = this.resetHereButtonClicked.bind(this);
  }

  resetHereButtonClicked() {
    this.setState({hereButtonClicked: false});
  }

  render() {
    return (
      <div>
        <MainNavBarContainer rootPath={"/"}
          hereButtonClicked={this.state.hereButtonClicked}
          resetHereButtonClicked={this.resetHereButtonClicked} />
        <div className="hero-text">
          <h1>A picture is worth a thousand words</h1>
          <h2>Share your stories and inspire others</h2>
          <h3>Discover new stories and stay inspired</h3>
          <h4>Begin your journey</h4>
        </div>
        <div>
          <video width="1280" height="720" autoPlay="autoplay" loop="loop"
            muted="">
            <source src={
              "http://res.cloudinary.com/one-thousand-words/video/" +
              "upload/v1489792924/home-hero-video_ihl5xo.mp4"}
              type="video/mp4"
            />
          </video>
          <footer>
            <nav>
              <a href="mailto:jkizer@gmail.com?subject=You're hired!">Email</a>
              <a href="https://github.com/justinkizer">Github</a>
              <a
                href="https://www.linkedin.com/in/justin-kizer-940336138/">
                Linkedin
              </a>
              <div className="footer-background" />
            </nav>
          </footer>
        </div>
      </div>
    );
  }
}

export default HomePage;
