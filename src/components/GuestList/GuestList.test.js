import { mount, shallow } from "enzyme";
import React from "react";

import GuestList from "./GuestList";
import Friend from "../Friend/Friend";
import friends from "../../fakeData/friends";

describe("The guest list", () => {
  test("It should have an <h1> with text 'Guest List'", () => {
    // arrange
    const wrapper = shallow(<GuestList friends={[]} />);
    // act

    // assert
    expect(
      wrapper
        .find("h1")
        .text()
        .toLowerCase()
    ).toEqual("guest list");
  });

  test("It should render a <ul> with class 'guest-list'", () => {
    // arrange
    const wrapper = shallow(<GuestList friends={[]} />);
    // act

    // assert
    expect(wrapper.find("ul.guest-list")).not.toBeNull();
  });

  test("It should render a <ul> with class 'friends-list'", () => {
    // arrange
    const wrapper = shallow(<GuestList friends={[]} />);
    // act

    // assert
    expect(wrapper.find("ul.friends-list")).not.toBeNull();
  });

  test("It should render a Friend component for each member of its 'friends' prop", () => {
    // arrange
    const wrapper = mount(<GuestList friends={friends} />);

    // act

    // assert
    expect(wrapper.find(Friend).length).toEqual(friends.length);
  });

  test("It should initially show no invited guests in the <p> tag rendered for that purpose.", () => {
    // arrange
    const listWrapper = shallow(<GuestList friends={friends} />);

    // act

    // assert
    expect(listWrapper.find("ul.guest-list").text()).toEqual("");
  });

  test("It should keep track of which friends have been selected, and render the selected friends, \
      comma-separated, in a <p> tag.", () => {
    // arrange
    const listWrapper = mount(<GuestList friends={friends} />);
    const friendWrapper = listWrapper.find(Friend).first();
    const guestsWrapper = listWrapper.find("ul.guest-list").first();

    // act
    friendWrapper.simulate("click");

    // assert
    expect(guestsWrapper.text()).toEqual(friends[0].name);
  });
});
