import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import TimerMixin from 'react-timer-mixin';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "", formPath: this.props.location.pathname, errors: [], red: false, green: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => {
      if (field === "password") {
        if (e.target.value.length > 5) {
          this.setState({[field]: e.target.value, red: false, green: true});
        }
        else if (e.target.value.length > 0) {
          this.setState({[field]: e.target.value, red: true, green: false});
        } else {
          this.setState({[field]: e.target.value, red: false, green: false});
        }
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  componentDidMount(){
    document.getElementById("nameField").focus();
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.currentUser && !newProps.closing) {
    this.setState({errors: newProps.errors});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formPath === "/login") {
      this.props.loginUser(this.state).then(this.props.closeModal).then(() => {
        if (this.props.rootPath === "/") {
          hashHistory.push(`/users/${this.props.currentUser.id}`);
        }
      });
    } else {
      this.props.signupUser(this.state).then(this.props.closeModal).then(() => {
        if (this.props.rootPath === "/") {
          hashHistory.push(`/users/${this.props.currentUser.id}`);
        }
      });
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
    this.timer1 = TimerMixin.setInterval(() => {this.setState({username: username.slice(0,usernameCount)}); }, 40);
    this.timer2 = TimerMixin.setInterval(() => { usernameCount++; }, 40);
    TimerMixin.setTimeout(() => {
      this.timer3 = TimerMixin.setInterval(() => {
        if (passwordCount > 5) {
          this.setState({password: password.slice(0,passwordCount), red: false, green: true});
        } else if (passwordCount > 0) {
          this.setState({password: password.slice(0,passwordCount), red: true, green: false});
        }
      }, 40);
      this.timer4 = TimerMixin.setInterval(() => { passwordCount++; }, 40);
    }, 550);
    TimerMixin.setTimeout(() => {
      this.props.loginUser(this.state).then(this.props.closeModal).then(() => {
        if (this.props.rootPath === "/") {
          hashHistory.push(`/users/${this.props.currentUser.id}`);
        }
      });
    }, 1250);
  }

  switchForm(e) {
    e.preventDefault();
    let link = this.state.formPath === "/login" ? "/join" : "/login";
    this.setState(() => ({formPath: link, errors: []}));
  }

  render () {
    let errors = this.state.errors ? this.state.errors.map((error, key) =>
      <li className="error" key={key}>{error}</li>
    ) : undefined;
    let disabledClass = this.toggleDisable === "disabled" ? "disabled-class" : "auth-button";
    let header = this.state.formPath === "/join" ? "Join" : "Login";
    let link = this.state.formPath === "/login" ? "/join" : "/login";
    let switchFormText = link === "/join" ? "Haven't Joined Yet?" : "Already Have an Account?";
    let submitButtonText = header === "Join" ? "Create Account" : "Login";
    let styleColor = (this.state.red ? {boxShadow: "inset 0 0 12px rgb(219, 15, 15)"} : (this.state.green ? {boxShadow: "inset 0 0 12px rgb(12, 203, 95)"} : {border: "none"}));
    return (
      <div className="login-form">
        <h1>{header}</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" id="nameField" onChange={this.update("username")} value={this.state.username} placeholder="Username" disabled={this.toggleDisable}/>
          <br/>
          <br/>
            <input className="pass-input" type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password" disabled={this.toggleDisable} style={styleColor}/>
            <span className="pass-tip">Passwords must be at least 6 characters</span>
          <br/>
          <br/>
          <input type="submit" className={disabledClass} value={submitButtonText} disabled={this.toggleDisable}></input>
          <br/>
          <br/>
          <button className={disabledClass} onClick={this.demoLogin} disabled={this.toggleDisable}>Login as Demo User</button>
          <br/>
          <br/>
          <button className="switch-form-text" to={""} onClick={e => this.switchForm(e)}>{switchFormText}</button>
        </form>
        <ul className="errors">
          {errors}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
