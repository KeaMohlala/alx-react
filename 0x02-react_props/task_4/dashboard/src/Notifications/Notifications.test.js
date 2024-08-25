import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders three NotificationItem elements", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it("renders the first NotificationItem with the correct html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).at(0).text()).toBe(
      "New course available"
    );
  });

  it("renders the second NotificationItem with the correct html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).at(1).text()).toBe(
      "New resume available"
    );
  });

  it("renders the third NotificationItem with the correct html", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).at(2).text()).toContain(
      "<strong>Urgent requirement</strong>"
    );
  });

  it("does not display the menuItem when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem").hasClass("hidden")).toBe(true);
  });

  it("does not display the Notifications div when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find("#root-notifications").hasClass("hidden")).toBe(true);
  });

  it("displays the menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").hasClass("hidden")).toBe(false);
  });

  it("displays the Notifications div when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("#root-notifications").hasClass("hidden")).toBe(false);
  });
});
