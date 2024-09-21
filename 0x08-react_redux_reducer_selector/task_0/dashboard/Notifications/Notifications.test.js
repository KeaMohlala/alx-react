import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  it("renders without crashing", () => {
    shallow(<Notifications />);
  });

  it("displays notifications and handles markAsRead", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
    ];
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        markNotificationAsRead={mockMarkAsRead}
      />
    );

    wrapper.find("NotificationItem").at(0).props().markAsRead(1);
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});
