import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {
    if (props.currentUser) {
      return (
        <div>
          <h1>Welcome, {props.currentUser.username}!</h1>
          <button onClick={props.logout}>Logout</button>
        </div>
      );
    } else {
        return (
          <div>
            <Link to={"/join"}>Join</Link>
            <br/>
            <Link to={"/login"}>Login</Link>
          </div>
        );
    }
};

export default Greeting;
