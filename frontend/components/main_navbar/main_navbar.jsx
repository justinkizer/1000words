import React from 'react';
import { Link } from 'react-router';
import { Modal } from 'react-bootstrap';
import SessionFormContainer from '../sessions/session_form_container.jsx';
import { hashHistory } from 'react-router';
import TimerMixin from 'react-timer-mixin';

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
    this.timer1 = TimerMixin.setTimeout(() => this.setState({startButtonClicked: false}), 800);
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

  componentWillUnmount() {
    TimerMixin.clearInterval(this.timer1);
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
            style={modalStyle}
            backdropStyle={backdropStyle}
            show={this.state.showModal}
            onHide={this.close}
          >
            <div style={dialogStyle()} >
              <SessionFormContainer closing={this.closing} closeModal={this.close} location={{pathname: this.formPath}}/>
            </div>

          </Modal>
          <div className="main-navbar-background"/>
        </nav>
        <button className="here-button" onClick={() => {
              this.setState({startButtonClicked: true});
              if (this.props.currentUser) {
                hashHistory.push("/");
                this.timer1 = TimerMixin.setTimeout(() => this.setState({startButtonClicked: false}), 800);
              } else {
                this.open("/join");
              }
          }} data-hover="join"><span>here</span></button>
      </header>
    );
  }
}

const modalStyle = {
  position: 'fixed',
  zIndex: 1040,
  top: 0, bottom: 0, left: 0, right: 0
};

const backdropStyle = {
  position: 'fixed',
  top: 0, bottom: 0, left: 0, right: 0,
  zIndex: 'auto',
  backgroundColor: '#000',
  opacity: 0.5
};

const dialogStyle = function() {
  return {
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: "30%",
    left: "50%",
    color: "white",
    minHeight: "280px",
    minWidth: "250px",
    fontFamily: "sans-serif",
    transform: `translate(-50%, -50%)`,
    backgroundColor: 'rgba(0,0,0,.6)',
    boxShadow: '0 5px 15px rgba(0,0,0,.5)',
    padding: "20px",
  };
};

export default MainNavBar;
