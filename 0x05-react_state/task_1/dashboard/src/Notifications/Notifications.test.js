import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("renders correctly with an empty listNotifications prop", () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find("p").text()).toEqual("No new notification for now");
  });

  it("renders correctly with a list of notifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );
    expect(wrapper.find("NotificationItem")).toHaveLength(2);
  });

  it("calls markAsRead and logs the correct message", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    const wrapper = shallow(
      <Notifications
        listNotifications={[
          { id: 1, type: "default", value: "New course available" },
        ]}
      />
    );
    const instance = wrapper.instance();

    instance.markAsRead(1);
    expect(logSpy).toHaveBeenCalledWith(
      "Notification 1 has been marked as read"
    );

    logSpy.mockRestore();
  });

  it("does not re-render when the same listNotifications prop is passed", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );

    const shouldUpdateSpy = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    // Set the same props again
    wrapper.setProps({ listNotifications });

    // Expect the component not to update
    expect(shouldUpdateSpy).toHaveReturnedWith(false);

    shouldUpdateSpy.mockRestore();
  });

  it("does re-render when a longer listNotifications prop is passed", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
    ];
    const longerListNotifications = [
      ...listNotifications,
      { id: 3, type: "urgent", value: "Urgent requirement" },
    ];
    const wrapper = shallow(
      <Notifications listNotifications={listNotifications} />
    );

    const shouldUpdateSpy = jest.spyOn(
      Notifications.prototype,
      "shouldComponentUpdate"
    );

    // Set the longer list of notifications
    wrapper.setProps({ listNotifications: longerListNotifications });

    // Expect the component to update
    expect(shouldUpdateSpy).toHaveReturnedWith(true);

    shouldUpdateSpy.mockRestore();
  });

  it("calls handleDisplayDrawer when clicking on the menu item", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.find(".menuItem").simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it("calls handleHideDrawer when clicking on the close button", () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />
    );
    wrapper.find("button").simulate("click");
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
