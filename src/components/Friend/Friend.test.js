import { shallow } from "enzyme";
import React from "react";

import Friend from "../Friend/Friend";

const friend = {
  id: 999,
  name: "Attila"
};

describe("A Friend component", () => {
  test("It should render an <li> with class 'friend'", () => {
    // arrange
    const wrapper = shallow(<Friend friendData={friend} />);
    // act

    // assert
    expect(wrapper.find("li.friend").length).toEqual(1);
  });

  test("It should render as text the name of the friend passed in as a prop", () => {
    // arrange
    const wrapper = shallow(<Friend friendData={friend} />);
    // act

    // assert
    expect(wrapper.text()).toEqual("Attila");
  });
});
