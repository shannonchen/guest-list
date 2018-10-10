import React from "react";
import Friend from "../Friend/Friend";

class GuestList extends React.Component {
  state = { clickedFriends: [] };
  handleClick = name => {
    this.setState(state => ({
      clickedFriends: state.clickedFriends.includes(name)
        ? state.clickedFriends
        : [...state.clickedFriends, name]
    }));
  };

  render() {
    return (
      <div>
        <h1>Guest List</h1>
        <h2>Invited Guests</h2>
        <ul className="guest-list">
          {this.state.clickedFriends.map(friend => (
            <Friend friendData={friend} />
          ))}
        </ul>
        <h2>Friends</h2>
        <ul className="friends-list">
          {this.props.friends.map(friend => (
            <li onClick={() => this.handleClick(friend)}>
              {<Friend friendData={friend} />}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GuestList;
