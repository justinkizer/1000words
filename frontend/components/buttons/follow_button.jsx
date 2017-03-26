import React from 'react';
import { Modal } from 'react-bootstrap';
import SessionFormContainer from '../sessions/session_form_container.jsx';

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.props.createFollowing.bind(this);
    this.unfollow = this.props.deleteFollowing.bind(this);
    this.updateFollowStatus = this.updateFollowStatus.bind(this);
    this.state = {followStatus: "Follow", followAction: this.follow, showModal:
      false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.closing = false;
  }

  componentWillMount() {
    setTimeout(() => {if (Array.isArray(this.props.currentUserFollows) &&
      this.props.currentUserFollows.includes(this.props.ownerId)) {
      this.setState({followStatus: "Unfollow", followAction: this.unfollow});
    }}, 200);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.paramsId !== this.props.paramsId) {
      if (Array.isArray(newProps.currentUserFollows) &&
        newProps.currentUserFollows.includes(parseInt(newProps.paramsId))) {
        this.setState({followStatus: "Unfollow", followAction: this.unfollow});
      } else {
        this.setState({followStatus: "Follow", followAction: this.follow});
      }
    } else if (newProps.updateTrigger) {
      if (newProps.currentUserFollows.includes(newProps.ownerId)) {
        this.setState({followStatus: "Unfollow", followAction: this.unfollow});
      } else {
        this.setState({followStatus: "Follow", followAction: this.follow});
      }
    }
  }

  updateFollowStatus() {
    if (this.props.currentUser) {
      let newStatus = this.state.followStatus === "Follow" ? "Unfollow" :
        "Follow";
      let newFollowAction = newStatus === "Unfollow" ? this.unfollow :
        this.follow;

      if (newStatus === "Follow" && this.props.screenSelected === "Followed" &&
        this.props.refreshAfterFollow) {
        this.state.followAction(this.props.ownerId)
          .then(setTimeout(this.props.closeModal, 400)).then(setTimeout(() =>
            this.props.refreshAfterFollow("Unfollow"), 1200));

        if (this.props.syncFollowButtons) {
          this.props.syncFollowButtons(newStatus);
        }

        this.setState({followStatus: newStatus, followAction: newFollowAction});

      } else if (this.props.refreshAfterFollow) {
        this.state.followAction(this.props.ownerId).then(setTimeout(() =>
          this.props.refreshAfterFollow("Follow"), 1200));

        if (this.props.syncFollowButtons) {
          this.props.syncFollowButtons(newStatus);
        }

        this.setState({followStatus: newStatus, followAction: newFollowAction});

      } else {
        this.state.followAction(this.props.ownerId);

        if (this.props.syncFollowButtons) {
          this.props.syncFollowButtons(newStatus);
        }

        this.setState({followStatus: newStatus, followAction: newFollowAction});
      }

    } else {
      this.open("/login");
    }
  }

  close(){
    this.closing = true;
    this.setState({ showModal: false});
  }

  open(formType){
    this.closing = false;
    this.setState({ showModal: true });
  }

  render() {
    let classType = "";
    let buttonStyleType = "follow-button";
    if (this.props.altStyling) {
      classType = "delete-button-spacer";
      buttonStyleType = "delete-button";
    }

    return (
      <div className={classType}>
        <button onClick={() => this.updateFollowStatus()}
          className={buttonStyleType}>{this.state.followStatus}
        </button>

          <Modal aria-labelledby='modal-label' className="modal-style"
            backdropStyle={backdropStyle} show={this.state.showModal}
            onHide={this.close}>

            <div className="auth-modal-dialog" >
              <SessionFormContainer followUponLogin={this.updateFollowStatus}
                rootPath={this.props.rootPath} closing={this.closing}
                closeModal={this.close} location={{pathname: "/login"}}
              />
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

export default FollowButton;
