import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import App, { mapStateToProps } from "./App"; // Import mapStateToProps
import { fromJS } from "immutable"; // Import Immutable.js

describe("App component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications").length).toBe(1);
  });

  it("verifies that the default state for displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state("displayDrawer")).toEqual(false);
  });

  it("verifies that after calling handleDisplayDrawer, the state is true", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state("displayDrawer")).toEqual(true);
  });

  it("verifies that after calling handleHideDrawer, the state is false", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state("displayDrawer")).toEqual(false);
  });

  it("marks a notification as read and updates the state", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state("listNotifications")).toEqual([
      { id: 1, type: "default", value: "New course available" },
      {
        id: 3,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong>" },
      },
    ]);
  });
});

// New test suite for mapStateToProps
describe("mapStateToProps function", () => {
  it("should return the correct props from state", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const expectedProps = { isLoggedIn: true };
    const result = mapStateToProps(state);

    expect(result).toEqual(expectedProps);
  });
});
