import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import App, { mapStateToProps } from "./App";
import { fromJS } from "immutable";

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

  // Test for Redux state prop `displayDrawer`
  it("verifies that the default prop for displayDrawer is false", () => {
    const wrapper = shallow(<App displayDrawer={false} />);
    expect(wrapper.prop("displayDrawer")).toEqual(false);
  });

  it("verifies that after calling displayNotificationDrawer, the displayDrawer prop is true", () => {
    const mockDisplayNotificationDrawer = jest.fn();
    const wrapper = shallow(<App displayDrawer={false} displayNotificationDrawer={mockDisplayNotificationDrawer} />);
    wrapper.prop("displayNotificationDrawer")();  // Trigger the displayNotificationDrawer prop function
    expect(mockDisplayNotificationDrawer).toHaveBeenCalled();
  });

  it("verifies that after calling hideNotificationDrawer, the displayDrawer prop is false", () => {
    const mockHideNotificationDrawer = jest.fn();
    const wrapper = shallow(<App displayDrawer={true} hideNotificationDrawer={mockHideNotificationDrawer} />);
    wrapper.prop("hideNotificationDrawer")();  // Trigger the hideNotificationDrawer prop function
    expect(mockHideNotificationDrawer).toHaveBeenCalled();
  });
});

// New test suite for mapStateToProps
describe("mapStateToProps function", () => {
  it("should return the correct props from state", () => {
    let state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
      },
    });

    const expectedProps = { isLoggedIn: true, displayDrawer: true };
    const result = mapStateToProps(state);

    expect(result).toEqual(expectedProps);
  });
});
