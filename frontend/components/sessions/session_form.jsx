import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import TimerMixin from 'react-timer-mixin';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "", formPath: this.props.location.pathname, errors: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.toggleDisable;
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.loggedIn && !newProps.closing) {
    this.setState({errors: newProps.errors});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formPath === "/login") {
      this.props.loginUser(this.state).then(this.props.closeModal);
    } else {
      this.props.signupUser(this.state).then(this.props.closeModal);
    }
  }

  componentWillUnmount() {
    TimerMixin.clearInterval(this.timer1);
    TimerMixin.clearInterval(this.timer2);
    TimerMixin.clearInterval(this.timer3);
    TimerMixin.clearInterval(this.timer4);
  }

  demoLogin(e) {
    e.preventDefault();
    this.toggleDisable = "disabled";
    let usernameCount = 0;
    let passwordCount = 0;
    let username = "DarthVader";
    let password = "123123123123";
    this.setState({formPath: "/login", errors: []});
    this.timer1 = TimerMixin.setInterval(() => { this.setState({username: username.slice(0,usernameCount)}); }, 40);
    this.timer2 = TimerMixin.setInterval(() => { usernameCount++; }, 40);
    TimerMixin.setTimeout(() => {
      this.timer3 = TimerMixin.setInterval(() => { this.setState({password: password.slice(0,passwordCount)}); }, 40);
      this.timer4 = TimerMixin.setInterval(() => { passwordCount++; }, 40);
    }, 550);
    TimerMixin.setTimeout(() => {
      this.props.loginUser(this.state).then(this.props.closeModal);
    }, 1250);
  }

  switchForm(e) {
    e.preventDefault();
    let link = this.state.formPath === "/login" ? "/join" : "/login";
    this.setState(() => ({formPath: link, errors: []}));
    hashHistory.replace(link);
  }

  render () {
    let header = this.state.formPath === "/join" ? "Join" : "Login";
    let link = this.state.formPath === "/login" ? "/join" : "/login";
    let switchFormText = link === "/join" ? "Haven't Joined Yet?" : "Already Have an Account?";
    let submitButtonText = header === "Join" ? "Create Account" : "Login";
    return (
      <div className="login-form">
        <h1>{header}</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("username")} value={this.state.username} placeholder="Username" disabled={this.toggleDisable}/>
          <br/>
          <br/>
          <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password" disabled={this.toggleDisable}/>
          <br/>
          <br/>
          <input type="submit" value={submitButtonText} disabled={this.toggleDisable}></input>
          <br/>
          <br/>
          <button onClick={this.demoLogin} disabled={this.toggleDisable}>Login as Demo User</button>
          <br/>
          <br/>
          <Link to={link} onClick={e => this.switchForm(e)}>{switchFormText}</Link>
        </form>
        <ul>
          {this.state.errors}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
