import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
import SessionFormContainer from '../sessions/session_form_container.jsx';
import { hashHistory } from 'react-router';

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.upload = this.upload.bind(this);
    this.createPhoto = this.props.createPhoto.bind(this);
    this.closing = false;
  }

  componentWillReceiveProps(newProps) {
    if (!this.props.currentUser && newProps.hereButtonClicked) {
      this.open("/join");
      this.props.resetHereButtonClicked();
    }
  }

  close(){
    this.closing = true;
    if (this.props.resetHereButtonClicked) {
      this.props.resetHereButtonClicked();
    }
    this.setState({ showModal: false});
  }

  open(formType){
    if (this.props.currentUser) {
      hashHistory.push(`/users/${this.props.currentUser.id}`);
    }
    this.closing = false;
    if (formType === "/join") {
      this.formPath = "/join";
    } else {
      this.formPath = "/login";
    }
    this.setState({ showModal: true });
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if (!error) {
        if (results.length > 1) {
          for (let i = 0; i < results.length; i++) {
            this.createPhoto(results[i]);
          }
        } else {
          this.createPhoto(results[0]);
        }
        setTimeout(this.props.resetAfterAdd, 250);
      }
    });
  }

  render () {
    let loginStatusDependentLinks;
    let hereButton = this.props.rootPath !== "/" ? "disabled" : "here-button";
    if (this.props.currentUser) {
      loginStatusDependentLinks = [
        <Link to={""} onClick={this.upload} key={"photoUpload"}>Upload Photo</Link>,
        <Link to={`/users/${this.props.currentUser.id}`} key={"profile"}>{this.props.currentUser.username}</Link>,
        <Link to={"/"} onClick={this.props.logout} key={"logout"}>Logout</Link>
      ];
    } else {
      loginStatusDependentLinks = [
        <button to={""} onClick={() => this.open("/join")} key={"join"}>Join</button>,
        <button to={""} onClick={() => this.open("/login")} key={"login"}>Login</button>
      ];
    }

    return (
      <header className="header">
        <nav>
          <Link to={"/"}>1000<p>words</p></Link>
          <Link to={"/discover"}>Discover</Link>
          {loginStatusDependentLinks}
          <Modal
            aria-labelledby='modal-label'
            className="modal-style"
            backdropStyle={backdropStyle}
            show={this.state.showModal}
            onHide={this.close}
          >
            <div className="auth-modal-dialog" >
              <SessionFormContainer rootPath={this.props.rootPath} closing={this.closing} closeModal={this.close} location={{pathname: this.formPath}}/>
            </div>

          </Modal>
          <div className="main-navbar-background"/>
        </nav>
        <button className={hereButton} onClick={() => (
          this.open("/join"))} data-hover="join"><span>here</span>
        </button>
      </header>
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

export default MainNavBar;
