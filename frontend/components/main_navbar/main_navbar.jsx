import React from 'react';
import { Link } from 'react-router';

const MainNavBar = props => {
  let loginStatusDependentLinks;
  if (props.currentUser) {
    loginStatusDependentLinks = [
      <Link to={"/"} key={"photoUpload"}>Upload Photo</Link>,
      <Link to={"/"} key={"profile"}>{props.currentUser.username}</Link>,
      <Link onClick={props.logout} key={"logout"}>Logout</Link>
    ];
  } else {
    loginStatusDependentLinks = [
      <Link to={"/join"} key={"join"}>Join</Link>,
      <Link to={"/login"} key={"login"}>Login</Link>
    ];
  }
  return (
    <header className="header">
      <nav>
        <Link to={"/"}>1000words</Link>
        <Link to={"/"}>Discover</Link>
        {loginStatusDependentLinks}
      </nav>
    </header>
  );
};

export default MainNavBar;
