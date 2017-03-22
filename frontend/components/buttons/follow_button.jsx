import React from 'react';

const FollowButton = (props) => {
  let classType = "";
  let buttonStyleType = "follow-button";
  if (props.altStyling) {
    classType = "delete-button-spacer";
    buttonStyleType = "delete-button";
  }
  return (
  <div className={classType}>
    <button className={buttonStyleType}>Follow</button>
  </div>);
};

export default FollowButton;
