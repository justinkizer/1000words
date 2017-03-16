import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "", formPath: this.props.location.pathname, errors: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault();
    this.setState({username: "DarthVader", password: "123123", formPath: "/login", errors: []});
    setTimeout(() => { this.props.loginUser(this.state).then(this.props.closeModal); }, 0);
  }

  switchForm(e) {
    e.preventDefault();
    let link = this.state.formPath === "/login" ? "/join" : "/login";
    this.setState(() => ({formPath: link, errors: []}));
    hashHistory.push(link);
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
          <input type="text" onChange={this.update("username")} value={this.state.username} placeholder="Username"/>
          <br/>
          <br/>
          <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password"/>
          <br/>
          <br/>
          <input type="submit" value={submitButtonText}></input>
          <br/>
          <br/>
          <button onClick={this.demoLogin}>Login as Demo User</button>
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
