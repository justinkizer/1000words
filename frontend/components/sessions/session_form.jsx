import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => hashHistory.push("/"));
  }

  render () {
    let errors;
    if (this.props.errors) { errors = this.props.errors; }
    let header = this.props.formType === "/join" ? "Join" : "Login";
    let link = this.props.location.pathname === "/login" ? "/join" : "/login";
    let switchFormText = link === "/join" ? "Haven't Joined Yet?" : "Already Have an Account?";

    return (
      <div className="login-form">
        <h1>{header}</h1>

        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("username")} value={this.state.username} placeholder="Username"/>

          <input type="password" onChange={this.update("password")} value={this.state.password} placeholder="Password"/>
          <br/>
          <br/>
          <input type="submit"></input>
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    );
  }
}

export default SessionForm;
