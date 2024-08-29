import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
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
});
