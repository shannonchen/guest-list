import React from "react";

class Friend extends React.Component {
  render() {
    return <li className="friend">{this.props.friendData.name}</li>;
  }
}
export default Friend;
