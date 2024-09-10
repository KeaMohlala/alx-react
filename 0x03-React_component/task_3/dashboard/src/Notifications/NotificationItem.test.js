import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component", () => {
  it("renders without crashing", () => {
    shallow(<NotificationItem id={1} />);
  });

  it("calls markAsRead with the correct id when clicked", () => {
    const mockMarkAsRead = jest.fn();
    const wrapper = shallow(
      <NotificationItem id={1} markAsRead={mockMarkAsRead} />
    );

    wrapper.find("li").simulate("click");
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});
