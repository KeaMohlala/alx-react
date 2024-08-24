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
    expect(wrapper.find(NotificationItem).at(2).html()).toContain(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
