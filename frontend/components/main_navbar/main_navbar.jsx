import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
import SessionFormContainer from '../sessions/session_form_container.jsx';
import { hashHistory } from 'react-router';

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, startButtonClicked: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.closing = false;
  }

  close(){
    this.closing = true;
    this.setState({ showModal: false});
  }

  open(formType){
    this.closing = false;
    if (formType === "/join") {
      this.formPath = "/join";
    } else {
      this.formPath = "/login";
    }
    this.setState({ showModal: true });
  }

  render () {
    let loginStatusDependentLinks;
    if (this.props.currentUser) {
      loginStatusDependentLinks = [
        <Link to={"/"} key={"photoUpload"}>Upload Photo</Link>,
        <Link to={"/"} key={"profile"}>{this.props.currentUser.username}</Link>,
        <Link onClick={this.props.logout} key={"logout"}>Logout</Link>
      ];
    } else {
      loginStatusDependentLinks = [
        <Link to={"/join"} onClick={() => this.open("/join")} key={"join"}>Join</Link>,
        <Link to={"/login"} onClick={() => this.open("/login")} key={"login"}>Login</Link>
      ];
    }

    return (
      <header className="header">
        <nav>
          <Link to={"/"}>1000words</Link>
          <Link to={"/"}>Discover</Link>
          {loginStatusDependentLinks}
          <Modal
            aria-labelledby='modal-label'
            className="modal-style"
            backdropStyle={backdropStyle}
            show={this.state.showModal}
            onHide={this.close}
          >
            <div className="auth-modal-dialog" >
              <SessionFormContainer closing={this.closing} closeModal={this.close} location={{pathname: this.formPath}}/>
            </div>

          </Modal>
          <div className="main-navbar-background"/>
        </nav>
        <button className="here-button" onClick={() => {
              if (this.props.currentUser) {
                hashHistory.push("/");
              } else {
                this.open("/join");
              }
          }} data-hover="join"><span>here</span></button>
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
