import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import App from "./App";

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
});
